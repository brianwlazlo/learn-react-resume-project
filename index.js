function HeaderImg () {
  return <img src="Opening-Spread-Malaga-By-ArtGate.jpg" width='600px' height="300px" alt="Malaga Panoramic"/>
}

ReactDOM.render(<HeaderImg />, document.getElementById('img'));

function Introduction () {
  return (
    <div>
      <div>
          <img src="sally-pic.jpg" alt="Sally Student Profile Picture"/>
      </div>
      <p>Hi I'm Sally I'm 25 and below this line you'll find more information about me.</p>
    </div>
  )
};

ReactDOM.render(<Introduction/>, document.getElementById('introduction'));

function Education() {
  return (
    <div>
      <p>I have studied at:</p>
        <ul>
            <li>IES BEZMILIANA</li>
            <li>Minnesota University</li>
        </ul>
    </div>
  )
};

ReactDOM.render(<Education/>, document.getElementById('Education'));

function WorkHistory () {
  return (
    <div>
      <p>I have worked at:</p>
      <div id="works_list">
        <ul>
          <li>Github as Engineer during 2018 and there I have to
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </li>
          <li>Jetbrains as Project manager during 2019 and I'm still working there. My work consist in
                  A assumenda autem dolorem doloremque
          </li>
        </ul>
      </div>
    </div>
  )
};

ReactDOM.render(<WorkHistory/>, document.getElementById('works'));

function Contact() {
  return (
    <div>
      <p>My contact information: </p>
        <address id="Contact-info">
            <p>My name is Sally</p>
            <p>My email is: <a href="mailto://sally@IntenetExplorer.old">sally@IntenetExplorer.old</a></p>
            <p>My phone number is: <a href="tel:+34100572415">+34 100 57 24 15</a></p>
        </address>
    </div>
  )
}

ReactDOM.render(<Contact/>, document.getElementById('Contact-section'));