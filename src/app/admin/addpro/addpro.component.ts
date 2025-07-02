import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { product } from 'src/app/models/product.model';
import { PopularCategories } from 'src/app/models/PopularCategories.model';
import { Article } from 'src/app/models/article.model';
import { LogoService } from 'src/app/Services/logo.service';
import { ProductService } from 'src/app/Services/product.service';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-addpro',
  templateUrl: './addpro.component.html',
  styleUrls: ['./addpro.component.css'],
})
export class AddproComponent implements OnInit {
  PopularCatgrForm!: FormGroup
  productForm!: FormGroup;
  allPro!: product[]
  DiscoverProForm!: FormGroup;
  ArticleForm!: FormGroup
  allDiscoverPro!: PopularCategories[]
  NewsArticles: Article[] = []
  categories: any;
  constructor(
    private fb: FormBuilder,
    private proSer: ProductService,
    private activtedRoute: ActivatedRoute,
    private logoSer: LogoService,

  ) {

  }

  sideBarData: any[] = [
    {
      name: "Add New Product",
      icon: "bi bi-tags"
    },
    {
      name: "Add More Catgories",
      icon: "bi bi-box-seam"
    },
    {
      name: "Add Logo Partner",
      icon: "bi bi-image"
    },
    {
      name: "Add Article Product",
      icon: "bi bi-newspaper"
    }
  ]

  selectedItem: string = ''
  proQty: number = 1
  allCatgrPro: PopularCategories[] = []
  alllogo: any[] = []

  id!: any;
  logForm !: FormGroup
  ngOnInit(): void {
    this.selectedItem = this.sideBarData[0].name
    this.initAllForms()

    // "T-Shirts",
    // "Jeans",
    // "Jackets",
    // "Dresses",
    // "Shoes",
    // "New Arrivals",
    // "Top-Seller"

    this.proSer.getCategories().subscribe((res) => {
      this.categories = res
    })


    this.id = this.activtedRoute.snapshot.paramMap.get('proid')
    console.log(this.id);
    // this.proSer.getCategories().subscribe((res) => {
    //   this.categories = console.log(res);
    // })

    if (this.id) {
      this.proSer.getProductId(this.id).subscribe((res: any) => {

        const updatePro = res

        // bgimg1 to img
        // headingPro to name
        // producthomePage to showOnHomePage

        this.productForm.patchValue({
          img: updatePro.img,
          name: updatePro.name,
          price: updatePro.price,
          id: updatePro.id,
          category: updatePro.category,
          showOnHomePage: updatePro.showOnHomePage
        })

      })

    }



    // this.proSer.getCategrPro().subscribe((res) => {
    //   this.allCatgrPro = res
    // })

    // this.proSer.getProducts().subscribe((res) => {
    //   this.allPro = res
    // })

    // this.proSer.getDiscoverPro().subscribe((res) => {
    //   this.allDiscoverPro = res
    // })

    this.logoSer.getSiteLogo().subscribe((res) => {
      this.alllogo = res
    })

    this.logoSer.getNewsArticle().subscribe((res) => {
      let aa = 0;
      this.NewsArticles = res
    })



  }


  initAllForms() {

    this.PopularCatgrForm = this.fb.group({
      img: ['', Validators.required],
      name: ['', Validators.required],
      topCategoryPro: ['', Validators.required],
      showOnHomePage: ['', Validators.required]
    })

    this.productForm = this.fb.group({
      img: ['', Validators.required],
      name: ['', Validators.required],
      price: ['', Validators.required],
      category: ['', Validators.required],
      showOnHomePage: ['', Validators.required],
      qty: [this.proQty]
    })

    // this.DiscoverProForm = this.fb.group({
    //   id: [this.customid2],
    //   img: ['', Validators.required],
    //   showHomePage: ['', Validators.required],
    //   btnText: ['', Validators.required],
    // })


    this.logForm = this.fb.group({
      imgurl: [''],
      showHomePge: [''],
    })

    this.ArticleForm = this.fb.group({
      imgUrl: [''],
      heading: [''],
      showHomePage: [''],
    })
  }



  submitcatgrPro() {

    if (this.id) {
      this.proSer.updateCategrPro(this.id, this.PopularCatgrForm.value).subscribe((res) => {
        console.log(res);
        this.PopularCatgrForm.reset();
      })
    } else {
      this.proSer.postCategrPro(this.PopularCatgrForm.value).subscribe((res) => {
        console.log(res);
        this.PopularCatgrForm.reset();
      })

    }

  }


  AddnewPro() {
    // const id = this.productForm.get('id')?.value;
    // const samePro = this.allPro.find((val: { id: any; }) => val.id == id)

    if (this.id) {
      this.proSer.updateProduct(this.id, this.productForm.value).subscribe((res) => {
        console.log(res);
        this.productForm.reset();
      })
    } else {
      //  check  if product name already exist then show msg otherwise create new product 
      const newName = this.productForm.get('name')?.value
      this.proSer.getProductByName(newName).subscribe((res) => {
        if (res) {
          alert("This name is already assigned to a product.");
        } else {
          this.proSer.postProduct(this.productForm.value).subscribe((res) => {
            this.productForm.reset();
          })
        }
      })



    }

  }


  // SubmitDiscoverPro() {

  //   if (this.id) {
  //     this.proSer.updateDiscoverPro(this.id, this.DiscoverProForm.value).subscribe((res) => {
  //       console.log(res);
  //       this.DiscoverProForm.reset();
  //     })
  //   } else {
  //     this.proSer.postDiscoverPro(this.DiscoverProForm.value).subscribe((res) => {
  //       console.log(res);
  //       this.DiscoverProForm.reset();
  //     })

  //   }




  addlogo() {

    if (this.id) {
      this.logoSer.updateSiteLogo(this.id, this.logForm.value).subscribe((res) => {
        console.log(res);
        this.logForm.reset();
      })
    } else {
      this.logoSer.postSiteLogo(this.logForm.value).subscribe((res) => {
        console.log(res);
        this.logForm.reset();
      })

    }

  }

  editItem(item: any) {
    this.logForm.patchValue({
      imgurl: item.imgurl,
      showHomePge: item.showHomePge,
    })
    if (this.logForm.contains('id')) {
      this.logForm.patchValue({ id: item.id });
    } else {
      this.logForm.addControl('id', this.fb.control(item.id));
    }

  }


  deleteItem(id: number) {
    this.logoSer.deleteSiteLogoFromService(id).subscribe((res) => {
      res
    })
  }


  submitArtilePro() {

    if (this.id) {
      this.logoSer.updateNewsArticle(this.id, this.ArticleForm.value).subscribe((res) => {
        console.log(res);
        this.ArticleForm.reset();
      })
    } else {
      this.logoSer.postNewsArticle(this.ArticleForm.value).subscribe((res) => {
        console.log(res);
        this.ArticleForm.reset();
      })

    }

  }

  editArticlePro(item: any) {
    this.ArticleForm.patchValue({
      imgUrl: item.imgUrl,
      heading: item.heading,
      showHomePage: item.showHomePage,
    })
    if (this.ArticleForm.contains('id')) {
      this.ArticleForm.patchValue({ id: item.id });
    } else {
      this.ArticleForm.addControl('id', this.fb.control(item.id));
    }
  }

  deleteArticlePro(id: number) {
    this.logoSer.deleteNewsArticleFromService(id).subscribe((res) => {
      console.log(res);

    })
  }

}


