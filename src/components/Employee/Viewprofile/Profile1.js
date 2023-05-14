import React, {useEffect} from "react";
import { useProfileFetch} from "../hooks";
// import {Icon} from "../components/Icon";
import {render, unmountComponentAtNode} from "react-dom";

function Profile ({user}) {
    const {items: profiles, load, loading} =  useProfileFetch('/api/users?user' + user )

    useEffect( () => {
    load()}, [])

    return <div>
            {loading && 'Chargement ...' }
            {
                profiles.map(p =>  (<Coordonees key={p.id} user={p.id} profile={p } />))
            }
    </div>

}

const Coordonees = React.memo(({profile}) => {
    return <div className="border rounded mb-4 p-3">
        <h3 className="h3-20">
            {/* <Icon icon="pin-map"/> Coordonées */}
        </h3>
        <div>{profile.prenom} {profile.nom}</div>
        <div>{profile.email}</div>
        <div>{profile.telephone}</div>
        <div>{profile.adresse} </div>
        <div>{profile.ville}, {profile.codePostale}</div>
    </div>

})

function CoordonneesForm (){

}


class ProfileElement extends HTMLElement{

    connectedCallback() {
        const user = parseInt(this.dataset.user, 10)
        render(<Profile user={user}/>, this)
    }
    disconnectedCallback() {
        unmountComponentAtNode(this)
    }


}

customElements.define('user-profile', ProfileElement)
export default  Profile 