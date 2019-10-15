import React from 'react';
import { Link } from 'react-router-dom';

import '../App.scss';
const Likes = ()=> (

    <div className="loved-btn">
      <div className="icon-heart"></div>
      <div className="likes-panel">
        <ul class="likes-list">
            <li>
                <Link>
                    <figure>
                        <img src='' alt="img" width='100' height='100'/>
                    </figure>
                    <div class="likes__data">
                        <h4 class="likesname"> Tomato ...</h4>
                        <p class="likesauthor">The</p>
                    </div>
                </Link>            
            </li>

            <li>
            <Link>
                <figure>
                    <img src='' alt="img" width='100' height='100'/>
                </figure>

                <div class="likesdata">
                    <h4 class="likesname">Tomato ...</h4>
                    <p class="likesauthor">The </p>
                </div>


            </Link>
        
        </li>
        
        </ul>
      </div>
    </div>        
      

)
export default Likes;