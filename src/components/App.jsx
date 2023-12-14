import Entry from "./Entry";
import emojipedia from "../emojipedia";

function AddEntry(emojis) {

    return (<Entry
        key={emojis.id}
        emojis={emojis.emoji}
        names={emojis.name}
        meanings={emojis.meaning}
    />); {/* Call to the component Entry and add the values to the props */ }



}
function App() {
    return (
        <div>
            <h1>
                <span>emojipedia</span>
            </h1>
            <dl className="dictionary">

                {emojipedia.map(AddEntry)}  {/* The function create AddEntry */}
            </dl>
        </div>
    );
}

export default App;
