
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js";
  import { getDatabase, ref, set, onValue, update, remove } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-database.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCMt_sOODzxT16jmoEa3bX5qdamkGpyms8",
    authDomain: "landing-1f21a.firebaseapp.com",
    databaseURL: "https://landing-1f21a-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "landing-1f21a",
    storageBucket: "landing-1f21a.appspot.com",
    messagingSenderId: "99058740736",
    appId: "1:99058740736:web:6d58ca14664e106424f2e5",
    measurementId: "G-M22QRL1548"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const database = getDatabase(app);
  
  function myFunction(input) {
    // console.log(input)
    // Get the snackbar DIV
    var x = document.getElementById("snackbar");
    document.getElementById('snackbar').innerHTML = input;

    // Add the "show" class to DIV
    x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
  }

  ebook.addEventListener('click', (e) => {
    var email = document.getElementById('emailModal').value;
    // var base_url = window.location.origin;
    var pathparts = location.pathname.split('/');
    if (location.host == 'localhost') {
        var base_url = location.origin+'/'+pathparts[1].trim('/')+'/';
    }else{
        var base_url = location.origin;
    }
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + ' ' + time;
    // console.log(dateTime)
    var refEmail = email.replace(/\./g, '');
    // console.log("email " + email + "nama " + nama + "saran " + saran)
    if (email == '') {
    //   console.log('nama kosong')
      myFunction("Email tidak boleh kosong!!!!");
    } else {
    //   console.log('object :>> harusnya ada');
      // cek_apa=1;
      set(ref(database, 'ebook/' + refEmail), {
        id: refEmail,
        nama: "Modal",
        email: email,
        saran: "Modal",
        tglBuat: dateTime,
      });
      document.getElementById('emailModal').value = '';
      myFunction("Tersimpan, terima kasih :)");
      $('#demoModal2').modal('hide');
      window.open(base_url+"/assets/doc/Ebook Laboratorium dan Jenis Layanannya.pdf");
    }
  });
  JoinUs3.addEventListener('click', (e) => {
    // console.log("coba")
    var nama = document.getElementById('inputFieldNama').value;
    var email = document.getElementById('inputFieldEmail').value;
    var saran = document.getElementById('exampleFormControlTextarea6').value;

    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + ' ' + time;
    // console.log(dateTime)
    var refEmail = email.replace(/\./g, '');
    // console.log("email " + email + "nama " + nama + "saran " + saran)

    if (nama == '') {
    //   console.log('nama kosong')
      myFunction("Nama tidak boleh kosong!!!!");
    } else if (email == '') {
    //   console.log('nama kosong')
      myFunction("Email tidak boleh kosong!!!!");
    } else {
      set(ref(database, 'emails/' + refEmail), {
        id: refEmail,
        nama: nama,
        email: email,
        saran: saran,
        tglBuat: dateTime,
      });

      //myFunction();
      //alert('saved');

      document.getElementById('inputFieldNama').value = '';
      document.getElementById('inputFieldEmail').value = '';
      document.getElementById('exampleFormControlTextarea6').value = '';
      myFunction("Tersimpan, terima kasih :)");
    }
  });

  