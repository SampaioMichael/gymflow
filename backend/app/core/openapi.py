"""
Configuração personalizada do OpenAPI da aplicação GymFlow.
"""

from fastapi import FastAPI
from fastapi.openapi.utils import get_openapi


def custom_openapi(app: FastAPI):
    """
    Gera um esquema OpenAPI personalizado para a aplicação GymFlow.

    O esquema de autenticação JWT é gerado automaticamente pelo
    OAuth2PasswordBearer definido em app.core.auth.
    """

    if app.openapi_schema:
        return app.openapi_schema

    openapi_schema = get_openapi(
        title=app.title,
        version=app.version,
        summary=app.summary,
        description=app.description,
        routes=app.routes,
    )

    # -------------------------------------------------------------------------
    # Informações da API
    # -------------------------------------------------------------------------

    openapi_schema["info"].update(
        {
            "contact": {
                "name": "Equipe GymFlow",
                "url": "https://github.com/Thamyresskr/gymflow",
                "email": "contato@gymflow.com",
            },
            "license": {
                "name": "MIT",
                "identifier": "MIT",
            },
        }
    )

    # -------------------------------------------------------------------------
    # Servidores
    # -------------------------------------------------------------------------

    openapi_schema["servers"] = [
        {
            "url": "http://127.0.0.1:8000",
            "description": "Ambiente de Desenvolvimento",
        }
    ]

    # -------------------------------------------------------------------------
    # Autenticação
    # -------------------------------------------------------------------------
    #
    # O OAuth2PasswordBearer definido em app.core.auth já registra
    # automaticamente o esquema de autenticação no OpenAPI.
    #
    # Não adicionamos manualmente um BearerAuth aqui.
    #
    # -------------------------------------------------------------------------

    app.openapi_schema = openapi_schema

    return app.openapi_schema