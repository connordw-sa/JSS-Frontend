import { fetchUser } from "../utils/HelperFunctions";
import { useEffect } from "react";

// imports ----------------------------------------------------------

export default function Landing() {
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    // test

    <div>
      <div className="landing-hero-section"></div>
      <h1>Landing</h1>

      <h1>Photo and about</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni doloribus
        rerum autem alias obcaecati, iste corporis aliquam molestias veniam in
        esse fugit dignissimos suscipit itaque ipsam maxime vero repellendus
        eligendi quaerat sunt magnam? Vero atque at maiores architecto
        dignissimos molestias corporis animi aliquam, corrupti odio expedita
        repellendus! Maxime, pariatur sed. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Tempora ex asperiores, quas nemo magni
        quod? Blanditiis nobis at provident incidunt voluptates aliquid nisi
        tempore magni, vel ullam, sequi quae officiis perspiciatis hic qui. Quo
        est aliquid consectetur officiis, soluta veniam reiciendis saepe
        corrupti vel nihil voluptatum sapiente tempore blanditiis deserunt
        impedit ex. Fugiat consequatur, tempora quod laudantium placeat eum
        voluptates, temporibus odit, repudiandae officia asperiores non
        exercitationem atque velit quos vel. Nesciunt porro neque facere a quas
        debitis ratione error mollitia nam, veritatis, quaerat, non adipisci
        iste nemo optio ex. Dolore exercitationem officiis aperiam quia nemo
        illum nesciunt distinctio necessitatibus expedita, pariatur quisquam
        laudantium ipsa, nisi, porro voluptates. Eius ducimus officia, sapiente
        facere ea error harum veritatis ab possimus eos minus tempora qui quo
        numquam deserunt unde repudiandae asperiores maxime, aliquam,
        dignissimos fuga hic? Modi qui quis alias et velit odit nobis, harum
        totam aperiam deserunt, ipsum suscipit vitae facere? Saepe quibusdam,
        quam eveniet fuga, dicta quod reprehenderit perferendis blanditiis
        provident quo magni perspiciatis, est mollitia nesciunt. Obcaecati
        excepturi iure accusantium a porro ipsum quidem, molestiae maxime odio
        ipsam! Quisquam aliquid, quo illum laudantium quis, neque natus laborum
        saepe facere voluptatem iste, aspernatur quae quaerat odio eius
        voluptate nesciunt animi perferendis similique dignissimos odit.
        Perspiciatis recusandae atque accusamus culpa ut, maiores qui aut enim
        molestiae numquam, eaque soluta alias eius repellat blanditiis maxime,
        quis reiciendis id cupiditate excepturi debitis placeat autem. Sunt
        quidem consequuntur repudiandae! Itaque est quidem deleniti laborum,
        debitis voluptatem explicabo iste quisquam cumque molestias sapiente
        minus quam dolores dolore illum provident placeat architecto culpa
        cupiditate. Itaque soluta fugit eaque tempore, voluptates commodi dicta
        sapiente accusamus amet distinctio ipsa fugiat beatae laborum eveniet
        dolore maxime vitae harum quae sequi ea corporis nobis ad tenetur!
        Numquam dolorem architecto maxime esse aut aperiam, ipsum explicabo
        doloribus recusandae expedita, voluptas quasi nihil cum minima
        reprehenderit iusto non tenetur quia ex vel quo, dolorum eum saepe! Illo
        quae enim facilis praesentium, nihil ullam tempora aperiam fugiat
        veritatis adipisci sint iusto cumque nesciunt sed ipsa est eum a
        molestiae eaque magni minima eius facere. Pariatur facilis tempore, vero
        magnam odit est perferendis ut obcaecati quis delectus? Adipisci vel
        dolorum officia in ad asperiores quam! Autem doloremque facere
        laudantium sint, ratione nobis voluptatum, molestias ullam eaque fugit
        sit asperiores officia pariatur consequuntur nemo enim doloribus!
        Maiores distinctio aperiam neque cum atque. Aperiam maiores, quis natus
        laudantium eligendi consequuntur autem eum incidunt possimus nemo
        tempore. Fugit dolore eum voluptas illo rerum dignissimos libero quo
        adipisci possimus ipsa ullam, tempora ratione veniam. Quae ducimus odit
        voluptate minima illo! Saepe necessitatibus, nostrum dicta, earum
        beatae, error atque eveniet repellendus quod modi inventore eaque
        similique! Expedita, blanditiis repudiandae officia beatae quasi quis,
        consequuntur cum velit molestiae mollitia possimus enim, consequatur
        atque doloribus! Repellat provident beatae autem eaque? Recusandae eos
        repudiandae ea amet asperiores illo ad, similique accusamus praesentium
        nostrum optio laborum est? Veritatis provident quis corrupti nam
        perferendis recusandae? Iste, aut? Beatae voluptates culpa doloremque
        accusantium modi architecto facere, ipsa repellendus eius. Recusandae ad
        voluptatum reprehenderit possimus veritatis!
      </p>
      <h1>Offering/services</h1>
      {/* will take you to sevices now */}
      <h1>Services 1 2 3</h1>
    </div>
  );
}
