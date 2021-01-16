import React from 'react'
import PropTypes from 'prop-types'


class PriceForm extends React.PureComponent {

  static propTypes = {
    onCancelSubmit: PropTypes.func.isRequired
  }

  static defaultProps = {
    onCancelSubmit: () => {}
  }

  constructor(props) {
    super(props)
    this.state = {
      title: '',
      price: '',
      date: '',
      validatePass: true,
      errorMessage: ''
    }
  }

  render() {
    const { title, price, date } = this.state
    return (
      <form onSubmit={(event) => {this.sumbitForm(event)}} noValidate>
        <div className="form-group">
          <label htmlFor="title">标题 *</label>
          <input 
            type="text" className="form-control" 
            id="title" placeholder="请输入标题"
            autoComplete="off"
            value={title}
            onChange={ (e) => { this.inputTitle(e) } }
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">价格 *</label>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">¥</span>
            </div>
            <input 
              type="number" 
              className="form-control" 
              value={price}
              id="price" placeholder="请输入价格"
              onChange={ e => { this.inputPrice(e) } }
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="date">日期 *</label>
          <input 
            type="date" className="form-control" 
            id="date" placeholder="请输入日期"
            value={date}
            onChange={ e => { this.inputDate(e) } }
          />
        </div>
        <button type="submit" className="btn btn-primary mr-3">提交</button>
        <button className="btn btn-secondary" onClick={this.props.onCancelSubmit}> 取消 </button>
        { !this.state.validatePass &&
          <div className="alert alert-danger mt-5" role="alert">
            {this.state.errorMessage}
          </div>
        }
      </form>
    )
  }

  sumbitForm(event) {
    console.log(event);
  }

  inputTitle(e) {
    this.setState({
      title: e.target.value
    })
  }

  inputPrice(e) {
    this.setState({
      price: e.target.value
    })
  }

  inputDate(e) {
    this.setState({
      date: e.target.value
    })
  }
}

export default PriceForm

