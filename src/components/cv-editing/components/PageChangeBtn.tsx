
type IPageChangeBtnProps = {
    
};

export function PageChangeBtn({ }: IPageChangeBtnProps) {


    return (
        <button 
            type="button"
            className="page-change-btn experience-select-btn">
            <span className="arrow left-arrow">{'<'}</span>
            <span className="arrow right-arrow">{'>'}</span>

            
        </button>
    );
}