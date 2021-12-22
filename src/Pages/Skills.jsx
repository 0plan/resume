const Skills = () => {
  const skills = {
    frontend: [{
      name: 'HTML',
      percentage: '0%'
    }, {
      name: 'Javascript ES5',
      percentage: '0%'
    }, {
      name: 'Javascript ES6',
      percentage: '0%'
    }, {
      name: 'jQuery',
      percentage: '0%'
    }, {
      name: 'JSP',
      percentage: '0%'
    }, {
      name: 'CSS',
      percentage: '0%'
    }, {
      name: 'SASS',
      percentage: '0%'
    }, {
      name: 'Vue.js',
      percentage: '0%'
    }, {
      name: 'React.js',
      percentage: '0%'
    }
    ],
    backend: [{
      name: 'Java Spring Boot',
      percentage: '0%',
    }, {
      name: 'Node.js Express Framework',
      percentage: '0%',
    }, {
      name: 'Python Django',
      percentage: '0%',
    }],
    language: [{
      name: 'Javascript ES5',
      percentage: '0%'
    }, {
      name: 'Javascript ES6',
      percentage: '0%'
    }, {
      name: 'Typescript',
      percentage: '0%'
    }, {
      name: 'C',
      percentage: '0%'
    }, {
      name: 'Java',
      percentage: '0%'
    }, {
      name: 'Python',
      percentage: '0%'
    },],
    database: [{
      name: 'MS SQL',
      percentage: '0%'
    }, {
      name: 'Oracle',
      percentage: '0%'
    }, {
      name: 'Mysql',
      percentage: '0%'
    }, {
      name: 'ANSI',
      percentage: '0%'
    },]
  };

  const Detail = (props) => {
    console.log(props)
    return props.map((item, i) => (
      <li className="w3-padding-16">{item.name}
        <div className="w3-grey">
          <div className="w3-container w3-dark-grey w3-padding w3-center progress-bar">
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
    console.log(object)
    console.log(filtered)
    
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

  const Backend = () => {
    let items = Detail(skills.backend)
    return (
      <div className="w3-third w3-margin-bottom">
        <ul className="w3-ul w3-border w3-white">
          <li className="w3-teal w3-xlarge w3-padding-32 w3-center">Back End</li>
          {items}
        </ul>
      </div>
    )
  }

  const Database = () => {
    let items = Detail(skills.database)
    return (
      <div className="w3-third w3-margin-bottom">
        <ul className="w3-ul w3-border w3-white">
          <li className="w3-black w3-xlarge w3-padding-32 w3-center">Database</li>
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
            <i className="fa fa-drafting-compass fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>
            Technical Skills
          </h2>
          <div className="w3-row-padding">
            <Frontend color='black' skill='frontend' name='Frontend'/>
            <Backend />
            <Database />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;