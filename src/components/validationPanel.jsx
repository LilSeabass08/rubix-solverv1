// panel of status, scrambled, solving, and solved, and a reset button

export default function StatusPanel({onReset}) {
    return (
        <div className="status-panel">
            <button className="reset-btn" onClick={onReset}>
                Reset
            </button>
            {console.log("Reset Pressed")}
        </div>
    )
}