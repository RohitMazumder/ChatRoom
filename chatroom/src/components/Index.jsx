import React from "react";
import SingleCard from "./SingleCard";
import Button from "react-bootstrap/Button";
import data from "../resources/welcomeScreen/config.json"
/* const data = require('../resources/welcomeScreen/config.json');
console.log(data)
*/
function Index() {
  return (
    <div>
      <h1 class="display-1 d-flex align-items-start m-2 ml-5 p-5">
        Hola visitor!
      </h1>
      <div class="row">
        <div class="col-md-12">
          <form>
            <h3>Pick a username and log in!</h3>
            <div class="form-row d-flex justify-content-center">
              <div class="col-md-3 col-sm-6 col-8 my-1">
                <label class="sr-only" for="inlineFormInputGroupUsername">
                  Username
                </label>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <div class="input-group-text">@</div>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    id="inlineFormInputGroupUsername"
                    placeholder="Username"
                  />
                </div>
              </div>
              <div class="col-auto my-1">
                <button type="submit" class="btn btn-primary">
                  Login
                </button>
              </div>
            </div>
            <div class="d-flex justify-content-center">
              <input
                class="form-control col-md-3 col-sm-4 col-6 my-3"
                type="search"
                placeholder="Search"
                aria-label="Search"
              ></input>
              <i class="fa fa-search mx-2 my-4" aria-hidden="true"></i>
            </div>
          </form>
        </div>
      </div>
      <div class="card-group justify-content-center align-items-center">
        <div class="row my-4">
          <div class="col-sm-6 col-md-4">
            <SingleCard
              title="Chess"
              text="This is a chatroom for chess enthusiasts. 
            Hope you'll find openings better than Danish here. :)"
            />
          </div>
          <div class="col-sm-6 col-md-4">
            <SingleCard
              title="Music"
              text="How about something unusual yet prominent?
            Flaunt your music skills here with people from around the world."
            />
          </div>
          <div class="col-sm-6 col-md-4">
            <SingleCard
              title="Movies"
              text="From timeless classics to drama to crime, this
            is your place if you've considered movies as an integral part of your daily life."
            />
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6 col-md-4">
            <SingleCard
              title="Literature"
              text="Fill this place with some catchy words...................for now i have to type
              s."
            />
          </div>
          <div class="col-sm-6 col-md-4">
            <SingleCard
              title="Mathematics"
              text="This is a place for geeks. It's better to stay away. xD blah blah blah..
              the greatest trick the de"
            />
          </div>
          <div class="col-sm-6 col-md-4">
            <SingleCard
              title="Mathematics"
              text="This is a place for geeks. It's better to stay away. xD blah blah blah..
              the greatest trick the de"
            />
          </div>
        </div>
        <div class="row my-4">
          <div class="col-sm-6 col-md-6">
            <SingleCard
              title="Chess"
              text="This is a chatroom for chess enthusiasts. 
            Hope you'll find openings better than Danish here. :)"
            />
          </div>
          <div class="col-sm-6 col-md-6">
            <SingleCard
              title="Music"
              text="How about something unusual yet prominent?
            Flaunt your music skills here with people from around the world."
            />
          </div>
          {
            data.map((cardDetails)=>{
              return <SingleCard title={cardDetails.cardTitle} text={cardDetails.subText} />
            })
          }
        </div>
      </div>
    </div>
  );
}

export default Index;
