import React from 'react';

function Home() {
  return (
    <div>
      <h1>
        <code>Home</code>
      </h1>
      <form>
        <label>
          <code>Adres początkowy:</code>
          <input type="text" name="Adres początkowy" />
        </label>
        <input type="submit" value="Zatwierdź" />
      </form>
      <form>
        <label>
          <code>Adres końcowy:</code>
          <input type="text" name="Adres początkowy" />
        </label>
        <input type="submit" value="Zatwierdź" />
      </form>
    </div>
  );
}

export default Home;
