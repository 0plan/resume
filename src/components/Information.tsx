const Description = (props) => {
  const lists = (
    <ul>
      {props.desc.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  )

  return <div>{props.desc.length > 0 || props.desc ? lists : ''}</div>
}

const Information = (props) =>
  props.props.map((item, index) => (
    <div className="w3-container" key={index}>
      <h5 className="w3-opacity">
        <b>
          {item.position ? <span>[{item.position}]</span> : <span />}{' '}
          {item.name}
        </b>
      </h5>
      <h6 className="w3-text-teal">
        <i className="fa fa-calendar fa-fw w3-margin-right" />
        {item.date.from}{' '}
        {item.date.to === 'Current' ? (
          <span>
            {' '}
            -&nbsp;
            <span className="w3-tag w3-teal w3-round">{item.date.to}</span>
          </span>
        ) : item.date.to ? (
          <span>- {item.date.to}</span>
        ) : (
          <span />
        )}
      </h6>
      <Description desc={item.desc} />
      <hr />
    </div>
  ))

export default Information
