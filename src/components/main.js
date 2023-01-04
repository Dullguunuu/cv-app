import Button from "./button"

const Tech = ({ techs }) => {
    return (
        <ul>
            {techs.map((e) => (
                <li>{e}</li>
            ))}
        </ul>
    )
}

const UserCard = ({ img, firstName, lastName }) => {
    return (
        <div>
            <img src={img ? img : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"} alt="user" width={150} />
            <h4>
                {firstName} {lastName}
            </h4>
        </div>
    )
}

export default function Main({ user, techs, greetPeople, showDate }) {

    const userInfo = { ...user, img: "https://www.w3schools.com/howto/img_avatar2.png" };

    let imgPa = "https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?w=2000";

    const users = [
        { img: imgPa, firstName: "Gonchig", lastName: "Bum" },
        { img: "", firstName: "Sumlai", lastName: "Dulam" },
        { img: imgPa, firstName: "Dondog", lastName: "Tsolmon" },
    ]

    return (
        <div>
            <div>
                <h4>Tech Stack</h4>
                <Tech techs={techs} />
                <UserCard {...userInfo} />

                {
                    users.map((userInfo) => {
                        return <UserCard {...userInfo} />
                    })
                }
                <Button text="Greet People" status={true} func={greetPeople} />
                <Button text="Show Date" status={false} func={showDate} />
            </div>
        </div>
    )
}