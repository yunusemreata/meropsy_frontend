"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.


export type CompanyUsers = {
    id: string;
    name: string;        // 'account_name' yerine 'name' kullanılabilir
    //companyName: string; // 'company_name' yerine 'companyName' kullanılabilir
    socialMedias: string[]; // 'social_medias' yerine 'socialMedias' kullanılabilir
    config: ["update", "delete", "view"]
};

export const columns: ColumnDef<CompanyUsers>[] = [

    {
        accessorKey: "name", // API'den gelen veriye uygun accessor
        header: "Ad",
    },
    {
        accessorKey: "config",
        header: "Bağlantılar",
        cell: (info) => {
            const config = info.getValue();
    
            console.log("config: " + config);
            // config'in bir dizi olup olmadığını kontrol et
            if (!Array.isArray(config)) {
                // config bir dizi değilse, işlem yapma
                return <div>Veri Yok</div>;
            }
    
            return (
                <div className="flex space-x-2">
                    {config.map((action: string) => {
                        switch (action) {
                            case 'update':
                                return <img src="/icons/edit.svg" key={action} />;
                            case 'delete':
                                return <img src="/icons/trash.svg" key={action} />;
                            case 'view':
                                return <img src="/icons/dots-vertical.svg" key={action} />;
                            default:
                                return null;
                        }
                    })}
                </div>
            );
        },
    }

    // {
    //     accessorKey: "config",
    //     header: "",
    //     cell: (info) => (
    //         <div className="flex space-x-2 justify-end">
    //             {info.getValue().map((media: string) => {
    //                 switch (media) {
    //                     case 'update':
    //                         return <img src="/icons/edit.svg" key={media} />;
    //                     case 'delete':
    //                         return <img src="/icons/trash.svg" key={media} />;
    //                     case 'view':
    //                         return <img src="/icons/dots-vertical.svg" key={media} />;
    //                     default:
    //                         return null;
    //                 }
    //             })}
    //         </div>
    //     ),
    // }
];

// export type Payment = {
//     id: string
//     account_name: string
//     company_name: string
//     social_medias: Array<string>
//     config: ["update", "delete", "view"]
// }

// export const columns: ColumnDef<Payment>[] = [

//     {
//         accessorKey: "account_name",
//         header: "Hesap Adı",
//     },
//     {
//         accessorKey: "company_name",
//         header: "Firma Adı",
//     },
//     {
//         accessorKey: "social_medias",
//         header: "Bağlantılar",
//         cell: (info) => (
//             <div className="flex space-x-2">
//                 {info.getValue().map((media: string) => {
//                     switch (media) {
//                         case 'twitter':
//                             return <img src="/icons/brand-twitter.svg" key={media} />;
//                         case 'facebook':
//                             return <img src="/icons/brand-facebook.svg" key={media} />;
//                         case 'instagram':
//                             return <img src="/icons/brand-instagram.svg" key={media} />;
//                         case 'youtube':
//                             return <img src="/icons/brand-youtube.svg" key={media} />;
//                         case 'tiktok':
//                             return <img src="/icons/brand-tiktok.svg" key={media} />;
//                         case 'linkedin':
//                             return <img src="/icons/brand-linkedin.svg" key={media} />;
//                         case 'pinterest':
//                             return <img src="/icons/brand-pinterest.svg" key={media} />;
//                         case 'spotify':
//                             return <img src="/icons/brand-spotify.svg" key={media} />;
//                         case 'twitch':
//                             return <img src="/icons/brand-twitch.svg" key={media} />;
//                         case 'github':
//                             return <img src="/icons/brand-github.svg" key={media} />;
//                         case 'soundcloud':
//                             return <img src="/icons/brand-soundcloud.svg" key={media} />;
//                         case 'vimeo':
//                             return <img src="/icons/brand-vimeo.svg" key={media} />;
//                         case 'medium':
//                             return <img src="/icons/brand-medium.svg" key={media} />;
//                         default:
//                             return null;
//                     }
//                 })}
//             </div>
//         ),
//     },
//     {
//         accessorKey: "config",
//         header: "",
//         cell: (info) => (
//             <div className="flex space-x-2 justify-end">
//                 {info.getValue().map((media: string) => {
//                     switch (media) {
//                         case 'update':
//                             return <img src="/icons/edit.svg" key={media} />;
//                         case 'delete':
//                             return <img src="/icons/trash.svg" key={media} />;
//                         case 'view':
//                             return <img src="/icons/dots-vertical.svg" key={media} />;
//                         default:
//                             return null;
//                     }
//                 })}
//             </div>
//         ),
//     }

// ]
