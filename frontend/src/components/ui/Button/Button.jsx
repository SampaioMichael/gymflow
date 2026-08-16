/**
 * Componente de botão reutilizável.
 *
 * Responsabilidades:
 * - Exibir botões padronizados.
 * - Suportar variantes de estilo.
 * - Exibir estado de carregamento.
 * - Permitir largura total quando necessário.
 * - Permitir classes adicionais.
 */

import PropTypes from "prop-types";

import styles from "./Button.module.css";

function Button({
    children,
    variant = "primary",
    type = "button",
    loading = false,
    disabled = false,
    fullWidth = false,
    className = "",
    onClick,
}) {
    const classes = [
        styles.button,
        styles[variant],
        fullWidth && styles.fullWidth,
        className,
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <button
            type={type}
            className={classes}
            disabled={disabled || loading}
            onClick={onClick}
        >
            {loading ? "Carregando..." : children}
        </button>
    );
}

Button.propTypes = {
    children: PropTypes.node.isRequired,

    variant: PropTypes.oneOf([
        "primary",
        "secondary",
        "danger",
        "success",
    ]),

    type: PropTypes.oneOf([
        "button",
        "submit",
        "reset",
    ]),

    loading: PropTypes.bool,

    disabled: PropTypes.bool,

    fullWidth: PropTypes.bool,

    className: PropTypes.string,

    onClick: PropTypes.func,
};

Button.defaultProps = {
    variant: "primary",
    type: "button",
    loading: false,
    disabled: false,
    fullWidth: false,
    className: "",
    onClick: undefined,
};

export default Button;