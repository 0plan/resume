const Skills = () => {
  const skills = {
    frontend: [{
      name: 'Vue.js',
      percentage: '70%'
    }, {
      name: 'React.js',
      percentage: '70%'
    }],
    backend: [{
      name: 'Java Spring Boot',
      percentage: '80%',
    }, {
      name: 'Node.js Express Framework',
      percentage: '70%',
    }, {
      name: 'Python Django',
      percentage: '20%',
    }],
    language: [{
      name: 'Javascript ES5',
      percentage: '80%'
    }, {
      name: 'Javascript ES6',
      percentage: '80%'
    }, {
      name: 'Java',
      percentage: '70%'
    }, {
      name: 'Python',
      percentage: '50%'
    },]
  };

  const Detail = (props) => {
    return props.map((item, i) => (
      <li className="w3-padding-16">{item.name}
        <div className="w3-light-grey w3-round-xlarge w3-small">
          <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{ width: item.percentage }}>
            {item.percentage}
          </div>
        </div>
      </li>
    ))
  };

  const Frontend = (props) => {
    // TODO: Filter 적용하여 props 와 일치하는 값을 전달
    let object = Object.values(skills).map(v => Object.keys(v).map(v2 => v[v2]))
    let filtered = object.filter(v => v.length > 5)
    let items = Detail((Object.values(skills)[0]));

    return (
      <div className="w3-third w3-margin-bottom">
        <ul className="w3-ul w3-border w3-white">
          <li className={`w3-${props.color} w3-xlarge w3-padding-32 w3-center`}>{props.name}</li>
          {items}
        </ul>
      </div>
    );
  };

  const Backend = (props) => {
    let items = Detail(skills.backend)
    return (
      <div className="w3-third w3-margin-bottom">
        <ul className="w3-ul w3-border w3-white">
          <li className={`w3-${props.color} w3-xlarge w3-padding-32 w3-center`}>{props.name}</li>
          {items}
        </ul>
      </div>
    )
  }

  const Language = (props) => {
    let items = Detail(skills.language)
    return (
      <div className="w3-third w3-margin-bottom">
        <ul className="w3-ul w3-border w3-white">
          <li className={`w3-${props.color} w3-xlarge w3-padding-32 w3-center`}>{props.name}</li>
          {items}
        </ul>
      </div>
    )
  }
  return (
    <div className="w3-content w3-margin-top">
      <div className="w3-row-padding w3-container">
        <div className="w3-container w3-card-4 w3-white w3-margin-bottom">
          <h2 className="w3-text-grey w3-padding-16">
            <i className="fa fa-drafting-compass fa-fw w3-margin-right w3-xxlarge w3-text-teal" />
            Technical Skills
          </h2>
          <div className="w3-row-padding">
            <Frontend color='teal' skill='frontend' name='Frontend' />
            <Backend color='black' skill='backend' name='Backend' />
            <Language color='teal' skill='language' name='Language' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;