/**
 * Componente Card reutilizável.
 *
 * Responsabilidades:
 * - Exibir conteúdo em um container padronizado.
 * - Exibir título opcional.
 * - Exibir ações no cabeçalho.
 */

import PropTypes from "prop-types";

import styles from "./Card.module.css";

function Card({
    title,
    actions,
    children,
}) {
    return (
        <section className={styles.card}>
            {(title || actions) && (
                <header className={styles.header}>
                    <h2>{title}</h2>

                    {actions && (
                        <div className={styles.actions}>
                            {actions}
                        </div>
                    )}
                </header>
            )}

            <div className={styles.content}>
                {children}
            </div>
        </section>
    );
}

Card.propTypes = {
    title: PropTypes.string,
    actions: PropTypes.node,
    children: PropTypes.node.isRequired,
};

Card.defaultProps = {
    title: "",
    actions: null,
};

export default Card;