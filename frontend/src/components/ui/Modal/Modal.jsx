/**
 * Componente de Modal reutilizável.
 *
 * Responsabilidades:
 * - Exibir conteúdo sobreposto.
 * - Fechar ao clicar no botão "X".
 * - Fechar ao clicar fora do conteúdo.
 * - Fechar ao pressionar ESC.
 * - Bloquear o scroll da página enquanto estiver aberto.
 * - Permitir qualquer conteúdo através de children.
 */

import { useEffect } from "react";
import PropTypes from "prop-types";

import styles from "./Modal.module.css";

export default function Modal({
    isOpen,
    onClose,
    title,
    children,
    width = "600px",
}) {
    useEffect(() => {
        if (!isOpen) {
            return undefined;
        }

        const originalOverflow = document.body.style.overflow;

        document.body.style.overflow = "hidden";

        function handleKeyDown(event) {
            if (event.key === "Escape") {
                onClose();
            }
        }

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = originalOverflow;
            window.removeEventListener(
                "keydown",
                handleKeyDown,
            );
        };
    }, [isOpen, onClose]);

    if (!isOpen) {
        return null;
    }

    return (
        <div
            className={styles.overlay}
            onClick={onClose}
            role="presentation"
        >
            <div
                className={styles.modal}
                style={{ maxWidth: width }}
                onClick={(event) => event.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-title"
            >
                <header className={styles.header}>
                    <h2 id="modal-title">
                        {title}
                    </h2>

                    <button
                        type="button"
                        className={styles.closeButton}
                        onClick={onClose}
                        aria-label="Fechar modal"
                    >
                        ×
                    </button>
                </header>

                <div className={styles.content}>
                    {children}
                </div>
            </div>
        </div>
    );
}

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    title: PropTypes.string,
    children: PropTypes.node.isRequired,
    width: PropTypes.string,
};

Modal.defaultProps = {
    title: "",
    width: "600px",
};