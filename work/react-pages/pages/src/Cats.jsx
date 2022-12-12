import rabbit0 from './img/rabbit0.png'
import rabbit1 from './img/rabbit1.png'
import rabbit2 from './img/rabbit2.png'
import './Cats.css';
function Cats({onNav}) {
    return (
        <div id="root_cats">
          <div className="card" id="rabbit1">
            <h2 className="card__title">Rabbit 1 Double Gray</h2>
            <img className="card__pic" src={rabbit0} alt="Rabbit 1 Double Gray"/>
            <div>
              <p >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, iure dignissimos adipisci alias aperiam quis in iste, assumenda similique rem quaerat libero consequatur reiciendis maiores modi aspernatur quam illo hic dolore qui ipsum perspiciatis? Obcaecati sequi, hic, perferendis quaerat rerum tempora cupiditate asperiores ea, inventore sint libero doloribus mollitia sed!</p>
              <a onClick={onNav}  href="/" data-target="Home">
                Go back to Home page
              </a>
            </div>
          </div>
          <div className="card" id="rabbit2">
            <h2 className="card__title">Rabbit 2 Dazai</h2>
            <img className="card__pic" src={rabbit1} alt="Rabbit 2 Dazai"/>
            <div>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet suscipit odit officiis similique, voluptate expedita ipsam ipsa perferendis, molestiae aliquid id excepturi? Veniam, expedita iusto.</p>
            </div>
          </div>
          <div className="card" id="rabbit3">
            <h2 className="card__title">Rabbit 3 Xiaozai</h2>
            <img className="card__pic" src={rabbit2} alt="Rabbit 3 Xiaozai"/>
            <div>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab architecto eius vel eum asperiores rem minima nulla explicabo dolorum error, eos pariatur officiis, fugit veritatis expedita reiciendis facilis ex. Eveniet illum ipsam voluptas explicabo eius quam et quae necessitatibus. Recusandae officia aspernatur ullam suscipit ab, assumenda sunt saepe adipisci placeat quaerat unde facere reiciendis, odit iusto odio facilis provident nam amet tenetur repellendus voluptatem porro? Optio deserunt magnam ratione eaque.</p>
            </div>
          </div>
          <div className="card" id="rabbit4">
            <h2 className="card__title">Rabbit Tom</h2>
            <img className="card__pic" src="https://source.unsplash.com/302xfiIGOfE" alt="Rabbit Tom"/>
            <div>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, iure dignissimos adipisci alias aperiam quis in iste, assumenda similique rem quaerat libero consequatur reiciendis maiores modi aspernatur quam illo hic dolore qui ipsum perspiciatis? Obcaecati sequi, hic, perferendis quaerat rerum tempora cupiditate asperiores ea, inventore sint libero doloribus mollitia sed!</p>
            </div>
          </div>
          <div className="card" id="rabbit5">
            <h2 className="card__title">Rabbit Jason</h2>
            <img className="card__pic" src="https://source.unsplash.com/u_kMWN-BWyU" alt="Rabbit Jason"/>
            <div>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet suscipit odit officiis similique, voluptate expedita ipsam ipsa perferendis, molestiae aliquid id excepturi? Veniam, expedita iusto.</p>
            </div>
          </div>
          <div className="card" id="rabbit6">
            <h2 className="card__title">Rabbit Mike</h2>
            <img className="card__pic" src="https://source.unsplash.com/IFnknR2Mv5o" alt="Rabbit Mike"/>
            <div>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab architecto eius vel eum asperiores rem minima nulla explicabo dolorum error, eos pariatur officiis, fugit veritatis expedita reiciendis facilis ex. Eveniet illum ipsam voluptas explicabo eius quam et quae necessitatibus. Recusandae officia aspernatur ullam suscipit ab, assumenda sunt saepe adipisci placeat quaerat unde facere reiciendis, odit iusto odio facilis provident nam amet tenetur repellendus voluptatem porro? Optio deserunt magnam ratione eaque.</p>
            </div>
          </div>

        </div>
    );
}

export default Cats;
