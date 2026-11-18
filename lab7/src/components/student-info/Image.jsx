import { useRef } from "react";

function Image() {
    const ref = useRef(null);

    const enlrgeImage = () => {
        console.log(ref.current);
        const currentWidth = ref.current.offsetWidth;
        ref.current.style.width = `${currentWidth + 50}px`;
    };

    const decreaseImage = () => {
        const currentWidth = parseInt(ref.current.style.width);
        if (currentWidth > 100) {
            ref.current.style.width = `${currentWidth - 50}px`;
        }
    };

    const removeImage = () => {
        ref.current.style.display = 'none';
        ref.current.style.width = "600px"
    }

    const addImage = () => {
        ref.current.style.display = 'block';    
    }

    return (
        <div className="Image">
            <div id="img-container">
                <a href="https://www.muenchen.de/" target="_blank" title="Перейти на офіційний сайт Мюнхена">
                    <img ref={ref} src="https://images.unsplash.com/photo-1595867818082-083862f3d630?auto=format&fit=crop&w=800&q=80" alt="Панорама Мюнхена та площа Марієнплац" />
                </a> 
            </div>
            <div class="controls">
                <button id="btn-add" onClick={addImage}>Додати</button>
                <button id="btn-increase" onClick={enlrgeImage}>Збільшити</button>
                <button id="btn-decrease" onClick={decreaseImage}>Зменшити</button>
                <button id="btn-remove" onClick={removeImage}>Видалити</button>
            </div>
        </div>
    )
}



export default Image;