"""
Schemas relacionados aos equipamentos.
"""

from datetime import datetime
from enum import Enum
from typing import Annotated

from pydantic import (
    BaseModel,
    ConfigDict,
    Field,
    StringConstraints,
)

from app.models.equipment import (
    CategoriaEquipamento,
    StatusEquipamento,
)


Patrimonio = Annotated[
    str,
    StringConstraints(
        min_length=3,
        max_length=30,
    ),
]


class EquipmentBase(BaseModel):
    """
    Informações básicas de um equipamento.
    """

    nome: str = Field(
        ...,
        title="Nome",
        description="Nome do equipamento.",
        min_length=3,
        max_length=100,
        examples=["Esteira Movement RT250"],
    )

    categoria: CategoriaEquipamento = Field(
        ...,
        title="Categoria",
        description="Categoria do equipamento.",
        examples=["cardio"],
    )

    fabricante: str | None = Field(
        default=None,
        title="Fabricante",
        description="Fabricante do equipamento.",
        examples=["Movement"],
    )

    modelo: str | None = Field(
        default=None,
        title="Modelo",
        description="Modelo do equipamento.",
        examples=["RT250"],
    )

    patrimonio: Patrimonio = Field(
        ...,
        title="Patrimônio",
        description="Código patrimonial do equipamento.",
        examples=["EQ-0001"],
    )

    numero_serie: str | None = Field(
        default=None,
        title="Número de Série",
        description="Número de série do fabricante.",
        examples=["SN123456789"],
    )

    observacao: str | None = Field(
        default=None,
        title="Observação",
        description="Observações gerais.",
        examples=["Equipamento revisado."],
    )


class EquipmentCreate(EquipmentBase):
    """
    Dados necessários para cadastro.
    """

    status: StatusEquipamento = Field(
        default=StatusEquipamento.ATIVO,
        title="Status",
        description="Situação inicial do equipamento.",
    )

    model_config = ConfigDict(
        json_schema_extra={
            "example": {
                "nome": "Esteira Movement RT250",
                "categoria": "cardio",
                "fabricante": "Movement",
                "modelo": "RT250",
                "patrimonio": "EQ-0001",
                "numero_serie": "SN123456789",
                "status": "ativo",
                "observacao": "Equipamento novo.",
            }
        }
    )


class EquipmentUpdate(BaseModel):
    """
    Dados utilizados para atualização.
    Todos os campos são opcionais.
    """

    nome: str | None = Field(
        default=None,
        min_length=3,
        max_length=100,
    )

    categoria: CategoriaEquipamento | None = None

    fabricante: str | None = None

    modelo: str | None = None

    patrimonio: Patrimonio | None = None

    numero_serie: str | None = None

    status: StatusEquipamento | None = None

    observacao: str | None = None

    model_config = ConfigDict(
        json_schema_extra={
            "example": {
                "status": "manutencao",
                "observacao": "Enviado para manutenção preventiva.",
            }
        }
    )


class EquipmentResponse(EquipmentBase):
    """
    Dados retornados pela API.
    """

    id: int = Field(
        ...,
        title="ID",
        examples=[1],
    )

    status: StatusEquipamento

    created_at: datetime

    updated_at: datetime

    model_config = ConfigDict(
        from_attributes=True,
        json_schema_extra={
            "example": {
                "id": 1,
                "nome": "Esteira Movement RT250",
                "categoria": "cardio",
                "fabricante": "Movement",
                "modelo": "RT250",
                "patrimonio": "EQ-0001",
                "numero_serie": "SN123456789",
                "status": "ativo",
                "observacao": "Equipamento novo.",
                "created_at": "2026-08-04T20:00:00",
                "updated_at": "2026-08-04T20:00:00",
            }
        },
    )