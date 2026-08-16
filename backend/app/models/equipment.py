from __future__ import annotations

from datetime import UTC, datetime
from enum import Enum

from sqlalchemy import DateTime, Enum as SQLEnum, Integer, String, Text
from sqlalchemy.orm import Mapped, mapped_column

from app.core.database import Base


class CategoriaEquipamento(str, Enum):
    """
    Categorias disponíveis para os equipamentos da academia.
    """

    CARDIO = "cardio"
    MUSCULACAO = "musculacao"
    PESO_LIVRE = "peso_livre"
    FUNCIONAL = "funcional"
    ALONGAMENTO = "alongamento"
    OUTRO = "outro"


class StatusEquipamento(str, Enum):
    """
    Situação atual do equipamento.
    """

    ATIVO = "ativo"
    MANUTENCAO = "manutencao"
    INATIVO = "inativo"


class Equipment(Base):
    """
    Modelo ORM que representa um equipamento da academia.

    Armazena os dados cadastrais e as informações necessárias
    para gerenciamento dos equipamentos.
    """

    __tablename__ = "equipments"

    # ==========================================================
    # Identificação
    # ==========================================================

    id: Mapped[int] = mapped_column(
        Integer,
        primary_key=True,
        index=True,
    )

    nome: Mapped[str] = mapped_column(
        String(100),
        nullable=False,
    )

    categoria: Mapped[CategoriaEquipamento] = mapped_column(
        SQLEnum(
            CategoriaEquipamento,
            name="categoria_equipamento",
        ),
        nullable=False,
    )

    # ==========================================================
    # Informações do equipamento
    # ==========================================================

    fabricante: Mapped[str | None] = mapped_column(
        String(100),
        nullable=True,
    )

    modelo: Mapped[str | None] = mapped_column(
        String(100),
        nullable=True,
    )

    patrimonio: Mapped[str] = mapped_column(
        String(30),
        unique=True,
        nullable=False,
        index=True,
    )

    numero_serie: Mapped[str | None] = mapped_column(
        String(60),
        nullable=True,
    )

    status: Mapped[StatusEquipamento] = mapped_column(
        SQLEnum(
            StatusEquipamento,
            name="status_equipamento",
        ),
        default=StatusEquipamento.ATIVO,
        nullable=False,
    )

    observacao: Mapped[str | None] = mapped_column(
        Text,
        nullable=True,
    )

    # ==========================================================
    # Auditoria
    # ==========================================================

    created_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        default=lambda: datetime.now(UTC),
        nullable=False,
    )

    updated_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        default=lambda: datetime.now(UTC),
        onupdate=lambda: datetime.now(UTC),
        nullable=False,
    )

    # ==========================================================
    # Representação
    # ==========================================================

    def __repr__(self) -> str:
        """
        Retorna uma representação textual resumida do equipamento.
        """

        return (
            f"Equipment("
            f"id={self.id}, "
            f"nome='{self.nome}', "
            f"categoria='{self.categoria.value}', "
            f"status='{self.status.value}')"
        )