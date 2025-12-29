// 🔹 Firebase configuratie
    const firebaseConfig = {
      apiKey: "AIzaSyDngxA1a8VqzCPATS-8KD3BQxdHqQ3ulFc",
      authDomain: "base-d7d9f.firebaseapp.com",
      databaseURL: "https://base-d7d9f-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "base-d7d9f",
      storageBucket: "base-d7d9f.firebasestorage.app",
      messagingSenderId: "923720459274",
      appId: "1:923720459274:web:d87698788e8915450c2bf3"
    };

    // 🔹 Firebase starten
    firebase.initializeApp(firebaseConfig);
    const db = firebase.database();

    // 🔹 Luister naar laatste meting
    db.ref("metingen").limitToLast(1).on("value", snapshot => {
      const data = snapshot.val();
      if (!data) return;

      const key = Object.keys(data)[0];
      const laatste = data[key];

      console.log("Ontvangen:", laatste);

      document.getElementById("locatie").innerText = laatste.locatie;
      document.getElementById("vhf").innerText = laatste.kanaal;
      document.getElementById("snelheid").innerText = laatste.snelheid;
    });
