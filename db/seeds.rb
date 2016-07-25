# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Computer.create(name: "HP Pavilion 15-au030nr 15.6-Inch Laptop (Core i7, 12 GB RAM, 1 TB HDD)", price: 769.00, kind: "laptop", url: "https://www.amazon.com/HP-Pavilion-15-au030nr-15-6-Inch-Laptop/dp/B01F6U8A3C/ref=gb1h_tit_u10_4102_d58f5962?ie=UTF8&*Version*=1&*entries*=0&smid=ATVPDKIKX0DER&pf_rd_m=ATVPDKIKX0DER&pf_rd_t=101&pf_rd_s=unified-hybrid-10&pf_rd_r=CKN61F9MKK2RXXMB6K0H&pf_rd_i=13896617011&pf_rd_p=2478754102", weight: 68.8, brand: "HP", operating_system: "Windows 10", screen_size: 15.6, RAM: 12, battery_life: 7)

Computer.create(name: "Fire HD 6 Tablet, 6 HD Display, Wi-Fi, 8 GB - Includes Special Offers, Black", price: 69.99, kind: "tablet", url: "https://www.amazon.com/dp/B00KC6I06S/ref=gb1h_img_u10_4102_28503a2f?smid=ATVPDKIKX0DER&pf_rd_m=ATVPDKIKX0DER&pf_rd_t=101&pf_rd_s=unified-hybrid-10&pf_rd_r=CKN61F9MKK2RXXMB6K0H&pf_rd_i=13896617011&pf_rd_p=2478754102", weight: 11, brand: "Amazon", operating_system: "Android", screen_size: 7, RAM: 1, battery_life: 8)

Computer.create(name: "Dell 15.6-Inch Gaming Laptop (6th Gen Intel Quad-Core i5-6300HQ Processor up to 3.2GHz, 8GB DDR3, 256GB SSD, Nvidia GeForce GTX 960M, Windows 10)", price: "779.99", kind: "laptop", url: "https://www.amazon.com/dp/B015PYYDMQ/ref=gb1h_tit_u10_4102_58398fba?smid=ATVPDKIKX0DER&pf_rd_m=ATVPDKIKX0DER&pf_rd_t=101&pf_rd_s=unified-hybrid-10&pf_rd_r=CKN61F9MKK2RXXMB6K0H&pf_rd_i=13896617011&pf_rd_p=2478754102", weight: 112, brand: "Dell", operating_system: "Windows 10", screen_size: 15.6, RAM: 8, battery_life: 4.5)

Computer.create(name: "Alienware AW13R2-8344SLV 13-Inch QHD+ Touchscreen Laptop (6th Generation Intel Core i7, 16 GB RAM, 256 GB SSD, NVIDIA GeForce GTX 960M,Windows 10 Home), Silver", price: 1199.99, kind: "laptop", url: "https://www.amazon.com/dp/B015PYZX0C/ref=gb1h_tit_u10_4102_a3b04106?smid=ATVPDKIKX0DER&pf_rd_m=ATVPDKIKX0DER&pf_rd_t=101&pf_rd_s=unified-hybrid-10&pf_rd_r=CKN61F9MKK2RXXMB6K0H&pf_rd_i=13896617011&pf_rd_p=2478754102", weight: 73.6, brand: "Alienware", operating_system: "WinHome HighEnd 10 64 ENG", screen_size: 13, RAM: 16, battery_life: 2)

Phone.create(name: "BLU Advance 5.0 - Unlocked Dual Sim Smartphone - US GSM - White", url: "https://www.amazon.com/BLU-Advance-5-0-Unlocked-Smartphone/dp/B018IZ0VLQ/ref=sr_1_2?s=electronics&ie=UTF8&qid=1469402989&sr=1-2&keywords=phones", price: 59.99, weight: 3.36, brand: "BLU")

Phone.create(name: "BLU R1 HD - 16 GB - Black - Prime Exclusive - with Lockscreen Offers & Ads", url: "https://www.amazon.com/BLU-R1-HD-Exclusive-Lockscreen/dp/B01H2E0J5M/ref=sr_1_5?s=electronics&ie=UTF8&qid=1469402989&sr=1-5&keywords=phones", price: 59.99, weight: 9.6, brand: "BLU")

Phone.create(name: "6 Inch Unlocked Android 4.4.2 MTK6572 Dual Core Smartphone 598.0~1203.0MHz RAM 512MB ROM 4GB Unlocked Dual SIM WCDMA GPS QHD IPS 6inch Cell Phones (Gold)", url: "https://www.amazon.com/Unlocked-Android-MTK6572-Smartphone-598-0~1203-0MHz/dp/B016NX0C8M/ref=sr_1_4?s=electronics&ie=UTF8&qid=1469402989&sr=1-4&keywords=phones", price: 69.86, weight: 15.2, brand: "Jiuhe")

Phone.create(name: "JUNING Unlocked GSM Cell Phones 5 Inch Anroid 5.1 Dual SIM Quad Core ROM 4GB 5.0MP Cameras, Gold", url: "https://www.amazon.com/JUNING-Unlocked-Phones-Anroid-Cameras/dp/B01AWXY0A0/ref=sr_1_20?s=electronics&ie=UTF8&qid=1469402989&sr=1-20&keywords=phones", price: 66.99, weight: 13.6, brand: "JUNING")

Clothing.create(kind: "dress", gender: "female", name: "WYLDR Women's Mailey Bodycon Off Shoulder Denim Dress", price: 64.00, url: "https://www.amazon.com/WYLDR-Womens-Mailey-Bodycon-Shoulder/dp/B01DMTTCUY/ref=lp_13895223011_1_5?s=apparel&ie=UTF8&qid=1469404192&sr=1-5&nodeID=13895223011", color: "blue", brand: "Wyldr")

Clothing.create(kind: "shorts", gender: "female", url: "https://www.amazon.com/NYDJ-Womens-Avery-Shorts-Colored/dp/B01CIQBBUG/ref=lp_14162503011_1_4?s=apparel&ie=UTF8&qid=1469404168&sr=1-4&nodeID=14162503011", price: 39.99, name: "NYDJ Women's Avery Shorts In Colored Bull Denim", color: "white", brand: "NYDJ")

Clothing.create(kind: "skirt", gender: "female", name: "BCBGMAXAZRIA Women's Lindsey Side Ruffle Tulip Skirt", price: 158.00, url: "https://www.amazon.com/BCBGMAXAZRIA-Womens-Lindsey-Ruffle-Tulip/dp/B01H0GSQWK/ref=lp_1045022_1_1?s=apparel&ie=UTF8&qid=1469404172&sr=1-1&nodeID=1045022", color: "black", brand: "BCBGMAXAZRIA")

Clothing.create(kind: "pants", gender: "male", name: "Haggar Men's Work To Weekend Hidden Expandable Waist No Iron Plain Front Pant", price: 24.99, url: "https://www.amazon.com/Haggar-Weekend-Hidden-Expandable-Waist/dp/B0018QASOI/ref=lp_1045558_1_2?s=apparel&ie=UTF8&qid=1469404470&sr=1-2&nodeID=1045558", color: "beige", brand: "Haggar")

Clothing.create(kind: "sweater", gender: "male", name: "Columbia Men's Klamath Range II Half-Zip Pullover", price: 16.90, url: "https://www.amazon.com/Columbia-Klamath-Collegiate-Marine-Medium/dp/B00QBAQTV2/ref=lp_1044442_1_2?s=apparel&ie=UTF8&qid=1469404468&sr=1-2&nodeID=1044442", color: "navy", brand: "Columbia")

Clothing.create(kind: "t-shirt", gender: "male", name: "Champion Men's Powertrain Performance T-Shirt", price: 8.93, url: "https://www.amazon.com/Champion-Powertrain-Performance-T-Shirt-Black/dp/B00HAX4ZX8/ref=lp_14146714011_1_2?s=apparel&ie=UTF8&qid=1469404463&sr=1-2&nodeID=14146714011", color: "navy", brand: "Champion")

Clothing.create(kind: "shorts", gender: "male", name: "Volcom Men's SNT Static Hybrid Short", price: 29.97, url: "https://www.amazon.com/gp/product/B016DGNII0/ref=s9_acsd_aas_bw_c_x_2?pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-2&pf_rd_r=P73SYNYMNQVKP625Q123&pf_rd_t=101&pf_rd_p=2509007042&pf_rd_i=14146712011", color: "gray", brand: "Volcom")

Accessory.create(name: "Steve Madden Women's Irenee Heeled Dress Sandal", brand: "Steve Madden", kind: "shoes", url: "https://www.amazon.com/gp/product/B01CGUB70S/ref=s9_acsd_aas_bw_c_x_2?pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-2&pf_rd_r=M6TPBWF0BS211R7QZMTG&pf_rd_t=101&pf_rd_p=2531563782&pf_rd_i=14069626011", gender: "female", price: 79.95)

Accessory.create(name: "Calvin Klein Men's Baron Oily Suede Slip-On Loafer", brand: "Calvin Klein", kind: "shoes", url: "https://www.amazon.com/gp/product/B01778Q17S/ref=s9_acsd_aas_bw_c_x_1?pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-2&pf_rd_r=P0BCSVV0GYZEMATBA9NV&pf_rd_t=101&pf_rd_p=2512130302&pf_rd_i=14151089011", gender: "male", price: 46.46)

Accessory.create(name: "Gucci Unisex YA133312 Interlocking GRAMMY Special Edition Black Watch", brand: "Gucci", kind: "watch", url: "https://www.amazon.com/gp/product/B00FWKQ7N2/ref=s9_acsd_hps_bw_c_x_1?pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-5&pf_rd_r=4K17BMYK3ACP3MJ3HPWP&pf_rd_t=101&pf_rd_p=2346316882&pf_rd_i=2593074011", gender: "male", price: 1150.00)

Accessory.create(name: "Sterling Silver Multicolor Pressed Flower Heart Pendant Necklace", brand: "Amazon Collection", kind: "jewelry", url: "https://www.amazon.com/gp/product/B00M0NZJ2E/ref=s9_acsd_aas_bw_c_x_5?pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-3&pf_rd_r=VGCF90XEXY986ZSDATZ5&pf_rd_t=101&pf_rd_p=2490278262&pf_rd_i=13577867011", gender: "female", price: 23.57)

Accessory.create(name: "Allen Edmonds Men's Basic 35 mm Dress Belt", brand: "Allen Edmonds", kind: "belt", url: "https://www.amazon.com/Allen-Edmonds-Basic-Dress-Suede/dp/B00JVSXJH8/ref=sr_1_5?s=apparel&ie=UTF8&qid=1469405520&sr=1-5&nodeID=2474947011", gender: "male", price: 98.00)


# rake db:drop
# response

