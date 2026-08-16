"""
Serviços relacionados ao gerenciamento de equipamentos.

Responsabilidades:
- Validar regras de negócio relacionadas aos equipamentos.
- Garantir integridade dos dados.
- Delegar a persistência para a camada CRUD.
- Registrar eventos relevantes da aplicação.
"""

from fastapi import HTTPException, status
from sqlalchemy.orm import Session

from app.core.logger import logger
from app.crud.equipment import (
    create_equipment,
    delete_equipment,
    get_all_equipments,
    get_equipment_by_id,
    get_equipment_by_patrimonio,
    update_equipment,
)
from app.models.equipment import Equipment
from app.schemas.equipment import (
    EquipmentCreate,
    EquipmentResponse,
    EquipmentUpdate,
)


def _get_existing_equipment(
    db: Session,
    equipment_id: int,
) -> Equipment:
    """
    Recupera um equipamento existente.
    """

    equipamento = get_equipment_by_id(
        db=db,
        equipment_id=equipment_id,
    )

    if equipamento is None:
        logger.warning(
            "Equipamento nao encontrado | id=%s",
            equipment_id,
        )

        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Equipamento não encontrado.",
        )

    return equipamento


def register_equipment(
    db: Session,
    equipment_data: EquipmentCreate,
) -> EquipmentResponse:
    """
    Realiza o cadastro de um novo equipamento.
    """

    equipamento_existente = get_equipment_by_patrimonio(
        db=db,
        patrimonio=equipment_data.patrimonio,
    )

    if equipamento_existente is not None:
        logger.warning(
            "Tentativa de cadastro com patrimonio ja existente | patrimonio=%s",
            equipment_data.patrimonio,
        )

        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="Patrimônio já cadastrado.",
        )

    equipamento = create_equipment(
        db=db,
        equipment_data=equipment_data,
    )

    logger.info(
        "Equipamento cadastrado | id=%s | patrimonio=%s",
        equipamento.id,
        equipamento.patrimonio,
    )

    return equipamento


def list_equipments(
    db: Session,
) -> list[Equipment]:
    """
    Retorna todos os equipamentos cadastrados.
    """

    return get_all_equipments(db=db)


def get_equipment(
    db: Session,
    equipment_id: int,
) -> Equipment:
    """
    Retorna um equipamento pelo identificador.
    """

    return _get_existing_equipment(
        db=db,
        equipment_id=equipment_id,
    )


def update_equipment_data(
    db: Session,
    equipment_id: int,
    equipment_data: EquipmentUpdate,
) -> Equipment:
    """
    Atualiza parcialmente os dados de um equipamento.

    Apenas os campos enviados serão alterados.
    """

    equipamento = _get_existing_equipment(
        db=db,
        equipment_id=equipment_id,
    )

    dados = equipment_data.model_dump(
        exclude_unset=True,
    )

    if "patrimonio" in dados:
        equipamento_existente = (
            get_equipment_by_patrimonio(
                db=db,
                patrimonio=dados["patrimonio"],
            )
        )

        if (
            equipamento_existente is not None
            and equipamento_existente.id != equipamento.id
        ):
            logger.warning(
                "Tentativa de atualizar para patrimonio ja existente | patrimonio=%s",
                dados["patrimonio"],
            )

            raise HTTPException(
                status_code=status.HTTP_409_CONFLICT,
                detail="Patrimônio já cadastrado.",
            )

    for campo, valor in dados.items():
        setattr(
            equipamento,
            campo,
            valor,
        )

    equipamento = update_equipment(
        db=db,
        equipment=equipamento,
    )

    logger.info(
        "Equipamento atualizado | id=%s",
        equipamento.id,
    )

    return equipamento


def remove_equipment(
    db: Session,
    equipment_id: int,
) -> None:
    """
    Remove um equipamento.
    """

    equipamento = _get_existing_equipment(
        db=db,
        equipment_id=equipment_id,
    )

    delete_equipment(
        db=db,
        equipment=equipamento,
    )

    logger.info(
        "Equipamento removido | id=%s",
        equipment_id,
    )