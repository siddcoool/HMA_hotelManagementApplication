import './index.css'

const CardItem = (props) => {
    const { price, description, onClick } = props.room
    return (
        <div className="ag-courses_item">
            <a href="#" className="ag-courses-item_link">
                <div className="ag-courses-item_bg"></div>
                <div className="ag-courses-item_price" >price: {price}</div>
                {(
                    <div className="ag-courses-item_date-box">

                        <span className="ag-courses-item_date">{description}</span>
                    </div>
                )}
            </a>
            <button onClick={() => onClick(props.room)}>Book</button>
        </div>
    );
};

const Cards = (prop) => {
    
    return (
        <div className="ag-format-container">
            <div className="ag-courses_box">
                {prop.items.map((item) => (
                    <CardItem  onClick={prop.onClick} room={item} />
                ))}
            </div>
        </div>
    );
};

export default Cards;
