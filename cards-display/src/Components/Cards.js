// Cards.js

function Cards( props ) {
    return (
      

          <div class="column">
            <div class="card">
                <h3> {props.header}</h3>
                <p> {props.item1}</p>
                <p> {props.item2}</p>
                <p> {props.item3}</p>
                <p> {props.item4}</p>

            </div>
        </div>
    )
  }
  export default Cards;