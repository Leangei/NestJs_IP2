import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';

import { ProductService } from '../../product/product.service';
import { CategoryService } from '../../category/category.service';
import { ProductType } from '../types/product.type';
import { CategoryType } from '../types/category.type';

@Resolver(() => ProductType)
export class ProductResolver {
  constructor(
    private readonly productService: ProductService,
    private readonly categoryService: CategoryService,
  ) {}

  @Query(() => [ProductType])
  products() {
    return this.productService.findAll();
  }

  @Query(() => ProductType, { nullable: true })
  product(@Args('id') id: number) {
    return this.productService.findOne(id);
  }

  @Mutation(() => ProductType)
  createProduct(
    @Args('name') name: string,
    @Args('price') price: number,
    @Args('categoryId') categoryId: string,
  ) {
    return this.productService.create(
      name,
      price,
      Number(categoryId),
    );
  }

  @ResolveField(() => CategoryType, { nullable: true })
  category(@Parent() product: any) {
    return this.categoryService.findOne(product.categoryId);
  }

  
}