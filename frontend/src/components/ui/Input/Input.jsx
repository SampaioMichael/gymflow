/**
 * Componente de Input reutilizável.
 *
 * Responsabilidades:
 * - Exibir label.
 * - Exibir input padronizado.
 * - Exibir mensagem de erro.
 * - Manter acessibilidade.
 */

import PropTypes from "prop-types";

import styles from "./Input.module.css";

function Input({
    id,
    name,
    label,
    type = "text",
    value,
    onChange,
    placeholder = "",
    required = false,
    disabled = false,
    autoComplete,
    autoFocus = false,
    minLength,
    maxLength,
    error = "",
}) {
    return (
        <div className={styles.formGroup}>
            {label && (
                <label htmlFor={id}>
                    {label}
                    {required && (
                        <span className={styles.required}>
                            {" "}*
                        </span>
                    )}
                </label>
            )}

            <input
                id={id}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                disabled={disabled}
                autoComplete={autoComplete}
                autoFocus={autoFocus}
                minLength={minLength}
                maxLength={maxLength}
                className={styles.input}
            />

            {error && (
                <small className={styles.error}>
                    {error}
                </small>
            )}
        </div>
    );
}

Input.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]).isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    autoComplete: PropTypes.string,
    autoFocus: PropTypes.bool,
    minLength: PropTypes.number,
    maxLength: PropTypes.number,
    error: PropTypes.string,
};

Input.defaultProps = {
    label: "",
    type: "text",
    placeholder: "",
    required: false,
    disabled: false,
    autoComplete: undefined,
    autoFocus: false,
    minLength: undefined,
    maxLength: undefined,
    error: "",
};

export default Input;