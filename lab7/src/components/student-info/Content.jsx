import { Component } from 'react';

class Content extends Component {
    switchColor1 = (event) => {
        const element = event.target;
        if (!element.classList.contains('color-state-1')) {
            element.classList.add('color-state-1');
        } else {
            element.classList.remove('color-state-1');
        }
    };

    switchColor2 = (event) => {
        const element = event.target;
        if (!element.classList.contains('color-state-2')) {
            element.classList.add('color-state-2');
        } else {
            element.classList.remove('color-state-2');
        }
    };

    render() {
        return (
            <div className="content">
                <h3 id="el-4" onClick={this.switchColor1}>Мої хобі:</h3>
                <ul className="el-5" onClick={this.switchColor2}>
                    <li>Програмування</li>
                    <li>Читання фантастики</li>
                    <li>Електроніка</li>
                </ul>
                <h3>Мої улюблені книги та фільми</h3>
                <ol>
                    <li>Володар перснів</li>
                    <li>Перший закон</li>
                    <li>Дюна</li>
                </ol>
                <h3>Улюблене місто — Мюнхен</h3>
                <p>Мюнхен — дивовижне місто на півдні Німеччини, яке ідеально поєднує в собі багатовікову баварську історію, величну неоготичну архітектуру та передові сучасні технології. Особливо вражає центральна площа Марієнплац із будівлею Нової ратуші, затишні парки та спокійний, розмірений ритм життя.</p>
            </div>
        );
    }
}

export default Content;