import React from "react";
import PersonajePK from '../componentes/PersonajePK'
import './PgPersonajes.css';

export default class PaginaPersonajesPK extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <>
                <div className="row justify-content-center align-items-center text-white">
                    <h1 className="tmTituloPK">Pokemón</h1>
                    </div>
                    <div className="row mb-4">
                        <PersonajePK 
                            nombrePK="Arceus"
                            imgPK='./imgs/arceus.jpg'
                            descripcionPK='Aquel que ilumina Hisui desde el cielo, salvaguardando y guiando a los Pokémon con su fulgor. Según los mitos de estas tierras, es el creador de todo lo existente. Arceus está basado en el concepto de una deidad creadora. Físicamente tiene una clara semejanza con una alpaca o una llama, haciendo referencia a la primera porque las culturas incas y aztecas las consideraban divinas, pero puede tener influencia también de ciervos, caballos y del Quilin, una criatura mística china. Posee una especie de arco en el torso que se dice que esconde sus 1.000 brazos dorados. La aureola que lleva alrededor del torso representa doblemente la perfección, ya que por una parte se asemejan al circumpunto, que es el símbolo del oro, del Sol y la perfección; por otra parte, el oro era un símbolo de perfección en algunas culturas sudamericanas. Arceus tiene una alta relación con el número 4, número asociado con la perfección en las culturas griega y romana: tiene 4 patas, 4 protuberancias en su cuello y 4 puntas en su aureola. Además, Arceus representa la pureza, porque su color blanco simboliza la inocencia, la paz y la pureza.'
                            namePK='arceus'
                        />
                        <PersonajePK 
                            nombrePK="Eternatus"
                            imgPK='./imgs/eternatus.jpg'
                            descripcionPK='Fue hallado en el interior de un meteorito caído hace 20000 años. Se alimenta de la energía que brota de la tierra de Galar absorbiéndola por el núcleo del pecho. Eternatus está basado en el esqueleto de un dragón. Todo su cuerpo parece estar hecho de cristales triangulares que irradian una luz rojiza, lo que probablemente sea energía Dinamax solidificada. Posee cinco pinchos en la parte superior de la cabeza de un cristal rojizo, donde además se pueden visualizar sus ojos.
                            Tiene unas mandíbulas de cristal azul, así como dos pequeñas manos con tres garras afiladas hechas de lo que parecen ser cristales, además de dos protuberancias semejantes a largas alas. Tiene también un par de patas unidas al tronco. En su pecho se puede observar un contenedor de forma romboide parecido a costillas en donde se encuentra un núcleo de luz roja. El cuello está conectado con unas protuberancias que finalizan en su cola, asemejándose a una columna vertebral.'
                            namePK='eternatus'
                        />
                        <PersonajePK 
                            nombrePK="Mewtwo"
                            imgPK='./imgs/mewtwo.jpg'
                            descripcionPK='Mewtwo fue creado por manipulación genética. Pero, a pesar de que el hombre creó su cuerpo, dotar a Mewtwo de un corazón compasivo quedó en el olvido. Mewtwo es un Pokémon artificial creado por científicos entre los que destaca el doctor Fuji a partir del ADN de Mew. Este Pokémon bípedo posee un cuerpo blanquecino, de sus sienes sobresalen un par de protuberancias rectangulares y tiene un tubo que se extiende desde el hueso occipital de su cráneo hasta su espina dorsal. Posee el vientre de una tonalidad púrpura, misma que se extiende hasta su larga cola. Mewtwo tiene tres dedos en cada mano y en cada pata con una especie de almohadillas. Sus ojos de color púrpura son fríos y brillantes, y llenan de temor a sus oponentes.
                            '
                            namePK='mewtwo'
                        />
                </div>
            </>
        )
    }
        
}
