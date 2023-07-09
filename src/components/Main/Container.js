import Form from "../Form/Form"
import Main from "./Main"
import OtherForecasts from "./OtherForecasts"

function Container() {
  return (
    <div className="container">
        <Form/>
        <Main/>
        <OtherForecasts/>
    </div>
  )
}

export default Container