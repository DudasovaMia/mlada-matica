export type Prispevok = {
  id: string;
  nazov: string;
  popis: string;
  datumZaciatok: string;
  datumKoniec: string;
  obrazky: string[];
  obrazok: string;
  datumVytvorenia: string;
};

export const galeria: Prispevok[] = [
  {
    id: "1",
    nazov: "Valné zhromaždenie 2022",
    popis:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis sapien et elit euismod consequat. Curabitur suscipit erat pulvinar nulla egestas tincidunt. Integer massa arcu, scelerisque quis accumsan eu, ultrices vel libero. Duis dui dolor, porta in dui id, congue aliquet nisi. Praesent at massa sit amet arcu pretium bibendum vitae rutrum leo. Aliquam arcu leo, maximus a tincidunt a, congue vel tortor. In vehicula in urna sit amet tempor. Nullam auctor sagittis facilisis.",
    datumZaciatok: "13.9.2023 8:00",
    datumKoniec: "13.9.2023 18:00",
    obrazky: [],
    obrazok:
      "https://firebasestorage.googleapis.com/v0/b/mlada-matica.appspot.com/o/slovenske-hory-3.png?alt=media&token=55e167d5-7ec3-4990-b090-096e53208bd2",
    datumVytvorenia: "22.7.2023 10:59:30",
  },
  {
    id: "2",
    nazov: "Snem Mladej Matice",
    popis:
      "Proin sodales sollicitudin commodo. Sed elementum quis dui at posuere. Curabitur feugiat tellus justo, sed eleifend turpis vulputate sit amet. Suspendisse potenti. Suspendisse ut cursus augue. Vestibulum tincidunt sapien a justo scelerisque tincidunt. Aliquam erat volutpat. In ac rutrum risus. Maecenas tincidunt aliquet enim, eget sagittis mauris aliquet at. Vivamus quis arcu eu dui pharetra rutrum a sed nisi.",
    datumZaciatok: "28.6.2023 15:30",
    datumKoniec: "31.6.2023 12:00",
    obrazky: [
      "https://firebasestorage.googleapis.com/v0/b/mlada-matica.appspot.com/o/slovenske-hory-1.jpg?alt=media&token=90778e3e-1c19-46a2-961f-39e7e7440c53",
      "https://firebasestorage.googleapis.com/v0/b/mlada-matica.appspot.com/o/slovenske-hory-3.png?alt=media&token=55e167d5-7ec3-4990-b090-096e53208bd2",
      "https://firebasestorage.googleapis.com/v0/b/mlada-matica.appspot.com/o/slovenske-hory-2.jpg?alt=media&token=86ddf0dd-2a65-4259-9098-4478dd1d8e47",
      "https://firebasestorage.googleapis.com/v0/b/mlada-matica.appspot.com/o/slovenske-hory-1.jpg?alt=media&token=90778e3e-1c19-46a2-961f-39e7e7440c53",
      "https://firebasestorage.googleapis.com/v0/b/mlada-matica.appspot.com/o/slovenske-hory-4.jpeg?alt=media&token=ea5803fd-94ab-42fd-bbda-cc473137d80d",
      "https://firebasestorage.googleapis.com/v0/b/mlada-matica.appspot.com/o/slovenske-hory-3.png?alt=media&token=55e167d5-7ec3-4990-b090-096e53208bd2",
    ],
    obrazok:
      "https://firebasestorage.googleapis.com/v0/b/mlada-matica.appspot.com/o/slovenske-hory-3.png?alt=media&token=55e167d5-7ec3-4990-b090-096e53208bd2",
    datumVytvorenia: "22.7.2023 3:29:10",
  },
  {
    id: "3",
    nazov: "Valné zhromaždenie 2023",
    popis:
      "Aenean arcu libero, tempus nec risus condimentum, suscipit suscipit leo. In egestas, felis sit amet ultrices ultricies, leo nibh pretium purus, id commodo est dui ac ipsum. Morbi elit arcu, eleifend eget consequat elementum, congue sed felis. Praesent laoreet est nec purus pretium, et dignissim tellus vulputate. Donec varius egestas libero, eget viverra lorem semper ut. Vivamus ultricies, purus sed efficitur tincidunt, urna sapien interdum nulla, ",
    datumZaciatok: "14.8.2023 12:00",
    datumKoniec: "16.8.2023 18:00",
    obrazky: [],
    obrazok:
      "https://firebasestorage.googleapis.com/v0/b/mlada-matica.appspot.com/o/slovenske-hory-2.jpg?alt=media&token=86ddf0dd-2a65-4259-9098-4478dd1d8e47",
    datumVytvorenia: "12.7.2023 13:09:30",
  },
  {
    id: "4",
    nazov: "Filatelistická olympiáda mládeže",
    popis:
      "Aenean sodales orci in lacus dapibus, malesuada ultrices lorem elementum. Pellentesque at elit sed orci commodo tincidunt ornare finibus ligula. Maecenas semper, metus vel sagittis tempor, leo orci vulputate mauris, vel bibendum est erat in nibh. In hendrerit lorem at ante ultricies aliquam. Phasellus vitae lorem massa. Sed quis quam eget massa ullamcorper egestas. Nulla et consequat nisl, ac interdum ligula.",
    datumZaciatok: "20.10.2023",
    datumKoniec: "20.10.2023",
    obrazky: [
      "https://firebasestorage.googleapis.com/v0/b/mlada-matica.appspot.com/o/slovenske-hory-2.jpg?alt=media&token=86ddf0dd-2a65-4259-9098-4478dd1d8e47",
      "https://firebasestorage.googleapis.com/v0/b/mlada-matica.appspot.com/o/slovenske-hory-1.jpg?alt=media&token=90778e3e-1c19-46a2-961f-39e7e7440c53",
      "https://firebasestorage.googleapis.com/v0/b/mlada-matica.appspot.com/o/slovenske-hory-4.jpeg?alt=media&token=ea5803fd-94ab-42fd-bbda-cc473137d80d",
      "https://firebasestorage.googleapis.com/v0/b/mlada-matica.appspot.com/o/slovenske-hory-3.png?alt=media&token=55e167d5-7ec3-4990-b090-096e53208bd2",
      "https://firebasestorage.googleapis.com/v0/b/mlada-matica.appspot.com/o/slovenske-hory-2.jpg?alt=media&token=86ddf0dd-2a65-4259-9098-4478dd1d8e47",
      "https://firebasestorage.googleapis.com/v0/b/mlada-matica.appspot.com/o/slovenske-hory-1.jpg?alt=media&token=90778e3e-1c19-46a2-961f-39e7e7440c53",
    ],
    obrazok:
      "https://firebasestorage.googleapis.com/v0/b/mlada-matica.appspot.com/o/slovenske-hory-1.jpg?alt=media&token=90778e3e-1c19-46a2-961f-39e7e7440c53",
    datumVytvorenia: "22.7.2023 11:03:00",
  },
];
