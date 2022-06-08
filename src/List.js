import React from 'react';
import { TiDelete } from "react-icons/ti";

const List = ({people, deletBirthday}) => {

  return (
    <>
      {
        people.map((person, index) => {
          const {id, name, age, image} = person

          return (
            <article className='person' key={id}>
              <img src={image} alt={name} />
              <div>
                <h4>{name}</h4>
                <p>{age} years</p>
                <TiDelete onClick={(e) => deletBirthday(id)} className='deleteIcon'/>
              </div>
            </article>
          )
        })
      }
    </>
  );
};

export default List;