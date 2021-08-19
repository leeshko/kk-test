import s from './Button.module.css';

const SortButton = ({ children, handleClick, changeNumber }) => {
    return (
        <button className={s.Btn}
            onClick={handleClick}
        >
            <div className={s.inButton}>
                {children}
            </div>
        </button>
    )
}

export default SortButton;