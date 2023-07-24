//     }

// ));

let liste = [
  {
    ad: `Orhan`,
    soyad: `Èkici`,
    yas: 10,
  },
  {
    ad: `Malik`,
    soyad: `Ömer`,
    yas: 10,
  },

  {
    ad: `Banu`,
    soyad: `Fikriye`,
    yas: 15,
  },
];

//let filtered = liste.filter(filtrelemeYap);
function filtrelemeYap(eleman) {
  return eleman.yas < 9;
}
let filtered = liste.filter((eleman) => eleman.yas > 9);

liste.forEach(elemanListele);

function elemanListele(listeElemani) {
  console.log(listeElemani.soyad);
}

let islemYap = (veri1, veri2) => {
  console.log[veri1 + veri2];
};

// () icinde olmazsa yazılanı return yapar
let merhabaDe = (ismim) => {
  console.log(`Merhaba` + ismim);
};
let adSoyadBirlestir2 = (ad, soyad) => {
  return ad + " " + soyad;
};

let maplenenler = liste.map((item) => item.yas);
console.table(maplenenler);
liste[0].ad = `hamdullah`;
console.table(maplenenler);
