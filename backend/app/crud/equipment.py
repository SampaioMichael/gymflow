"""
Camada de acesso a dados (CRUD) para equipamentos.

Responsabilidades:
- Persistir equipamentos.
- Consultar equipamentos.
- Atualizar equipamentos.
- Remover equipamentos.
"""

from sqlalchemy.orm import Session

from app.models.equipment import Equipment
from app.schemas.equipment import EquipmentCreate


def get_equipment_by_id(
    db: Session,
    equipment_id: int,
) -> Equipment | None:
    """
    Busca um equipamento pelo identificador.
    """

    return (
        db.query(Equipment)
        .filter(Equipment.id == equipment_id)
        .first()
    )


def get_equipment_by_patrimonio(
    db: Session,
    patrimonio: str,
) -> Equipment | None:
    """
    Busca um equipamento pelo patrimônio.
    """

    return (
        db.query(Equipment)
        .filter(
            Equipment.patrimonio == patrimonio
        )
        .first()
    )


def get_all_equipments(
    db: Session,
) -> list[Equipment]:
    """
    Retorna todos os equipamentos cadastrados.
    """

    return (
        db.query(Equipment)
        .order_by(Equipment.nome.asc())
        .all()
    )


def create_equipment(
    db: Session,
    equipment_data: EquipmentCreate,
) -> Equipment:
    """
    Cria um novo equipamento.
    """

    equipment = Equipment(
        nome=equipment_data.nome,
        categoria=equipment_data.categoria,
        fabricante=equipment_data.fabricante,
        modelo=equipment_data.modelo,
        patrimonio=equipment_data.patrimonio,
        numero_serie=equipment_data.numero_serie,
        status=equipment_data.status,
        observacao=equipment_data.observacao,
    )

    db.add(equipment)

    db.flush()

    db.commit()

    db.refresh(equipment)

    return equipment


def update_equipment(
    db: Session,
    equipment: Equipment,
) -> Equipment:
    """
    Persiste alterações realizadas em um equipamento.
    """

    db.add(equipment)

    db.flush()

    db.commit()

    db.refresh(equipment)

    return equipment


def delete_equipment(
    db: Session,
    equipment: Equipment,
) -> None:
    """
    Remove um equipamento.
    """

    db.delete(equipment)

    db.commit()