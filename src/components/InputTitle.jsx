export default function ArtworkCard(props) {
  const [artWorksTitle, setArtWorksTitle] = useState("Infinity Mirror Room");

  const handleSubmit = event => {
 event.preventDefault(); 
 console.log('Il titolo inviato è:' + artWorksTitle)
  }
  return(
    <div>
        <form onSubmit={handleSubmit}>
          <input type="text" value {artWorksTitle} onChange={(event) => setArtWorksTitle(e.target.value)}/>
          <button type="submit" className="btn">
          <i className="bi bi-floppy"></i>Save
        </button>
        </form>
    </div>
  );
}
