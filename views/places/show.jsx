const React = require('react')
const Def = require('../default')

function show (data) {
  let comments=(
    <h3 className="inactive">No Comments Yet!</h3>
  )
  if(data.place.comments.length){
    comments = data.place.comments.map((c) => {
      return(
        <div className="border">
          <h2 className='rant'>{c.rant ? 'Rant!' : 'Rave!'}</h2>
          <h4>{c.content}</h4>
          <h3>
            <strong> - {c.author} </strong>
          </h3>
          <h4> Rating: {c.stars}</h4>
        </div>
      )
    });
  }
    return (
      <Def>
        <main>
          <div className="row">
            <div className="col-sm-6">
              <img src={data.place.pic} alt={data.place.name} />
              <h3>
                Located in {data.place.city}, {data.place.state}
              </h3>
            </div>
            <div className="col-sm-6"></div>
            <h2>Description</h2>
            <h3>{data.place.showEstablished()}</h3>
            <h4>Serving {data.place.cuisines}</h4>
          </div>
          <hr />
          <h2> Comments</h2>
          {comments}
          <form action= {`/places/${data.place.id}/rant`}method="POST">
            <input type="text" name="author" />
            <input type="textarea" name="content"  />
            <input type="Number" name="stars" />
            <input type="checkbox" name="rant" />
            <button type="submit">Submit</button>
          </form>
        </main>
      </Def>
    );
}

module.exports = show
