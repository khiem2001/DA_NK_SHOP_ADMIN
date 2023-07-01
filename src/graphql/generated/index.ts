import type { GraphQLClient } from 'graphql-request';
import type { RequestInit } from 'graphql-request/dist/types.dom';
import { useMutation, useQuery, type UseMutationOptions, type UseQueryOptions } from '@tanstack/react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables extends { [key: string]: any }>(client: GraphQLClient, query: string, variables?: TVariables, requestHeaders?: RequestInit['headers']) {
  return async (): Promise<TData> => client.request({
    //@ts-ignore
	 document: query,
    variables,
    requestHeaders
  });
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AddToCartInput = {
  productId: Scalars['String'];
  quantity: Scalars['Float'];
};

export type AdminInputDto = {
  password: Scalars['String'];
  userName: Scalars['String'];
};

export type AdminLoginResponse = {
  __typename?: 'AdminLoginResponse';
  expiresAt: Scalars['String'];
  payload: AdminPayload;
  refreshToken: Scalars['String'];
  refreshTokenExpiresAt: Scalars['String'];
  token: Scalars['String'];
};

export type AdminPayload = {
  __typename?: 'AdminPayload';
  _id?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  userName?: Maybe<Scalars['String']>;
};

export type BooleanPayload = {
  __typename?: 'BooleanPayload';
  success?: Maybe<Scalars['Boolean']>;
};

export type CartType = {
  __typename?: 'CartType';
  _id?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  productId?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Boolean']>;
  userId?: Maybe<Scalars['String']>;
};

export type ChangePassWhenLoginInput = {
  currentPassword: Scalars['String'];
  newPassword: Scalars['String'];
};

export type ChangePassWhenLoginType = {
  __typename?: 'ChangePassWhenLoginType';
  changed: Scalars['Boolean'];
};

export type ChangePasswordInputDto = {
  confirmPassword: Scalars['String'];
  otp: Scalars['String'];
  password: Scalars['String'];
  sessionId: Scalars['String'];
};

export type ChangePasswordResponse = {
  __typename?: 'ChangePasswordResponse';
  updated: Scalars['Boolean'];
};

export type CommentResponse = {
  __typename?: 'CommentResponse';
  _id: Scalars['String'];
  countFeedback?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['Float']>;
  message: Scalars['String'];
  parentId?: Maybe<Scalars['String']>;
  productId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Float']>;
  user?: Maybe<UserDtoType>;
};

export type ConfirmOrderInput = {
  orderId: Scalars['String'];
};

export type ConfirmOtpRequestInput = {
  otp: Scalars['String'];
  sessionId: Scalars['String'];
};

export type ConfirmOtpResponse = {
  __typename?: 'ConfirmOtpResponse';
  confirmed?: Maybe<Scalars['Boolean']>;
};

export type ConversationDtoType = {
  __typename?: 'ConversationDtoType';
  _id: Scalars['String'];
  createdAt?: Maybe<Scalars['Float']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['Float']>;
  deletedBy?: Maybe<Scalars['String']>;
  members?: Maybe<Array<Maybe<UserDtoType>>>;
  name: Scalars['String'];
  ownerId?: Maybe<Scalars['String']>;
  type: ConversationType;
  updatedAt?: Maybe<Scalars['Float']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export enum ConversationType {
  Group = 'GROUP',
  Personal = 'PERSONAL'
}

export type CreateCommentInput = {
  message: Scalars['String'];
  parentId?: InputMaybe<Scalars['String']>;
  productId: Scalars['String'];
};

export type CreateConversationInput = {
  name: Scalars['String'];
  type: ConversationType;
};

export type CreateConversationType = {
  __typename?: 'CreateConversationType';
  conversation: ConversationDtoType;
};

export type CreatePaymentInputDto = {
  code: Scalars['String'];
  couponCode?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  items: Array<OrderItem>;
  paymentMethod: PaymentMethod;
  paymentProvider?: InputMaybe<PaymentProvider>;
  paymentType?: InputMaybe<PaymentType>;
  shippingAddress: Scalars['String'];
};

export type CreatePaymentResponse = {
  __typename?: 'CreatePaymentResponse';
  redirectUrl?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type CreateProductInputDto = {
  compatibility?: InputMaybe<Scalars['String']>;
  connectivity?: InputMaybe<Scalars['String']>;
  countInStock: Scalars['Float'];
  description: Scalars['String'];
  dimensions?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  manufacturer?: InputMaybe<Scalars['String']>;
  modelNumber?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  powerSource?: InputMaybe<Scalars['String']>;
  price: Scalars['Float'];
  type: Scalars['String'];
  warranty?: InputMaybe<Scalars['String']>;
  weight?: InputMaybe<Scalars['String']>;
};

export type DeleteTypeInput = {
  typeId: Scalars['String'];
};

export type FavoriteProductInput = {
  productId: Scalars['String'];
};

export type FilterProductInput = {
  price_gte?: InputMaybe<Scalars['Float']>;
  price_lte?: InputMaybe<Scalars['Float']>;
  type_eq?: InputMaybe<Scalars['String']>;
};

export enum Gender {
  Female = 'Female',
  Male = 'Male',
  Unknown = 'Unknown'
}

export type GetIdAdminResponse = {
  __typename?: 'GetIdAdminResponse';
  id: Scalars['String'];
};

export type GetListProductInput = {
  filter?: InputMaybe<FilterProductInput>;
  pagination: PaginationBaseInput;
  query?: InputMaybe<Scalars['String']>;
};

export type GetListProductResponse = {
  __typename?: 'GetListProductResponse';
  pagination?: Maybe<PaginationResponse>;
  products?: Maybe<Array<ProductPayload>>;
  totalItem?: Maybe<Scalars['Float']>;
};

export type GetListTypeResponse = {
  __typename?: 'GetListTypeResponse';
  data?: Maybe<Array<ProductType>>;
};

export type GetProductResponse = {
  __typename?: 'GetProductResponse';
  product?: Maybe<ProductPayload>;
};

export type IsFavoriteProductInput = {
  productId: Scalars['String'];
};

export type ListCartType = {
  __typename?: 'ListCartType';
  cart?: Maybe<Array<CartType>>;
};

export type ListCommentInput = {
  id: Scalars['String'];
};

export type ListCommentResponse = {
  __typename?: 'ListCommentResponse';
  data?: Maybe<Array<CommentResponse>>;
};

export type ListConversationInput = {
  userId: Scalars['String'];
};

export type ListConversationResponse = {
  __typename?: 'ListConversationResponse';
  data?: Maybe<Array<ConversationDtoType>>;
};

export type ListFeedbackInput = {
  parentId: Scalars['String'];
};

export type ListMessageInput = {
  conversationId: Scalars['String'];
  pagination: PaginationBaseInput;
};

export type ListMessageResponse = {
  __typename?: 'ListMessageResponse';
  data: Array<MessageDtoType>;
};

export type ListOrderResponse = {
  __typename?: 'ListOrderResponse';
  orders?: Maybe<Array<OrderDto>>;
};

export type ListUserResponse = {
  __typename?: 'ListUserResponse';
  user: Array<UserDtoType>;
};

export type LockOrUnLockUserInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  expiresAt: Scalars['String'];
  payload?: Maybe<UserPayload>;
  refreshToken: Scalars['String'];
  refreshTokenExpiresAt: Scalars['String'];
  token: Scalars['String'];
};

export type LoginSocialInputDto = {
  accessToken: Scalars['String'];
  provider: Provider;
};

export type LoginUserInputDto = {
  password: Scalars['String'];
  phoneNumber: Scalars['String'];
};

export type Media = {
  __typename?: 'Media';
  _id?: Maybe<Scalars['String']>;
  duration?: Maybe<Scalars['Float']>;
  fileName?: Maybe<Scalars['String']>;
  mimeType?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  status?: Maybe<MediaStatus>;
  url?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export enum MediaStatus {
  Uploaded = 'UPLOADED',
  Uploading = 'UPLOADING'
}

export type MessageDtoType = {
  __typename?: 'MessageDtoType';
  _id: Scalars['String'];
  content: Scalars['String'];
  conversationId: Scalars['String'];
  createdAt?: Maybe<Scalars['Float']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['Float']>;
  deletedBy?: Maybe<Scalars['String']>;
  senderId?: Maybe<UserDtoType>;
  updatedAt?: Maybe<Scalars['Float']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addToCart: BooleanPayload;
  adminLogin: AdminLoginResponse;
  changePassword: ChangePasswordResponse;
  changePasswordWhenLogin: ChangePassWhenLoginType;
  clearCart: BooleanPayload;
  confirmOrder: BooleanPayload;
  confirmOtp: ConfirmOtpResponse;
  createAdmin: BooleanPayload;
  createComment: CommentResponse;
  createCommentAdmin: CommentResponse;
  createConversation: CreateConversationType;
  createPayment: CreatePaymentResponse;
  createProduct: BooleanPayload;
  createType: BooleanPayload;
  deleteProduct: BooleanPayload;
  deleteType: BooleanPayload;
  favoriteProduct: BooleanPayload;
  inValidOtp: ConfirmOtpResponse;
  lockOrUnLockUser: BooleanPayload;
  loginSocial: LoginResponse;
  loginUser: LoginResponse;
  printOrder: PrintOrderType;
  registerUser: RegisterUserResponse;
  removeFromCart: BooleanPayload;
  sendEmail: SendEmailResponse;
  sendOtp: SendOtpResponse;
  updateAvatarUser: BooleanPayload;
  updateProduct: BooleanPayload;
  updateProfile: UpdateProfileResponse;
  verifyEmail: BooleanPayload;
  verifyPhone: VerifyPhoneResponse;
};


export type MutationAddToCartArgs = {
  input: AddToCartInput;
};


export type MutationAdminLoginArgs = {
  input: AdminInputDto;
};


export type MutationChangePasswordArgs = {
  input: ChangePasswordInputDto;
};


export type MutationChangePasswordWhenLoginArgs = {
  input: ChangePassWhenLoginInput;
};


export type MutationConfirmOrderArgs = {
  input: ConfirmOrderInput;
};


export type MutationConfirmOtpArgs = {
  input: ConfirmOtpRequestInput;
};


export type MutationCreateAdminArgs = {
  input: AdminInputDto;
};


export type MutationCreateCommentArgs = {
  input: CreateCommentInput;
};


export type MutationCreateCommentAdminArgs = {
  input: CreateCommentInput;
};


export type MutationCreateConversationArgs = {
  input: CreateConversationInput;
};


export type MutationCreatePaymentArgs = {
  input: CreatePaymentInputDto;
};


export type MutationCreateProductArgs = {
  input: CreateProductInputDto;
};


export type MutationCreateTypeArgs = {
  input: ProductTypeInput;
};


export type MutationDeleteProductArgs = {
  input: ReadProductInputDto;
};


export type MutationDeleteTypeArgs = {
  input: DeleteTypeInput;
};


export type MutationFavoriteProductArgs = {
  input: FavoriteProductInput;
};


export type MutationInValidOtpArgs = {
  input: ConfirmOtpRequestInput;
};


export type MutationLockOrUnLockUserArgs = {
  input: LockOrUnLockUserInput;
};


export type MutationLoginSocialArgs = {
  input: LoginSocialInputDto;
};


export type MutationLoginUserArgs = {
  input: LoginUserInputDto;
};


export type MutationPrintOrderArgs = {
  input: ConfirmOrderInput;
};


export type MutationRegisterUserArgs = {
  input: RegisterUserInputDto;
};


export type MutationRemoveFromCartArgs = {
  input: RemoveFromCartInput;
};


export type MutationSendEmailArgs = {
  input: SendPinCodeInput;
};


export type MutationSendOtpArgs = {
  input: SendOtpRequestInput;
};


export type MutationUpdateAvatarUserArgs = {
  input: UpdateAvatarInput;
};


export type MutationUpdateProductArgs = {
  input: UpdateProductInputDto;
};


export type MutationUpdateProfileArgs = {
  input: UpdateProfileInputDto;
};


export type MutationVerifyEmailArgs = {
  input: VerifyEmailInput;
};


export type MutationVerifyPhoneArgs = {
  input: VerifyPhoneInputDto;
};

export type OrderDto = {
  __typename?: 'OrderDto';
  _id?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Float']>;
  code?: Maybe<Scalars['String']>;
  couponCode?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
  discountAmount?: Maybe<Scalars['Float']>;
  items?: Maybe<Array<OrderItemResponse>>;
  paymentMethod?: Maybe<PaymentMethod>;
  shippingAddress?: Maybe<Scalars['String']>;
  shippingStatus?: Maybe<ShippingStatus>;
  status?: Maybe<OrderStatus>;
  subTotal?: Maybe<Scalars['Float']>;
  transaction?: Maybe<OrderTransactionType>;
  userId?: Maybe<UserDtoType>;
};

export type OrderItem = {
  id: Scalars['String'];
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  quantity: Scalars['Float'];
};

export type OrderItemResponse = {
  __typename?: 'OrderItemResponse';
  id?: Maybe<ProductPayload>;
  name?: Maybe<Scalars['String']>;
  price: Scalars['Float'];
  quantity: Scalars['Float'];
};

export enum OrderStatus {
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  Pending = 'PENDING'
}

export type OrderTransactionType = {
  __typename?: 'OrderTransactionType';
  gateway?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  time?: Maybe<Scalars['Float']>;
};

export type PaginationBaseInput = {
  /** Page option: ID */
  after?: InputMaybe<Scalars['ID']>;
  /** Page option */
  limit: Scalars['Int'];
  /** Page option: No pagination */
  noPaginate?: InputMaybe<Scalars['Boolean']>;
  /** Page option */
  page: Scalars['Int'];
};

export type PaginationResponse = {
  __typename?: 'PaginationResponse';
  currentPage?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  totalPage?: Maybe<Scalars['Int']>;
};

export enum PaymentMethod {
  Offline = 'OFFLINE',
  Online = 'ONLINE'
}

export enum PaymentProvider {
  Vnpay = 'VNPAY',
  Zalopay = 'ZALOPAY'
}

export enum PaymentType {
  Atm = 'ATM',
  Cc = 'CC'
}

export type PrintOrderType = {
  __typename?: 'PrintOrderType';
  pdfPath?: Maybe<Scalars['String']>;
};

export type ProductInputDto = {
  compatibility?: InputMaybe<Scalars['String']>;
  connectivity?: InputMaybe<Scalars['String']>;
  countInStock: Scalars['Float'];
  description: Scalars['String'];
  dimensions?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  manufacturer?: InputMaybe<Scalars['String']>;
  modelNumber?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  powerSource?: InputMaybe<Scalars['String']>;
  price: Scalars['Float'];
  type: Scalars['String'];
  warranty?: InputMaybe<Scalars['String']>;
  weight?: InputMaybe<Scalars['String']>;
};

export type ProductPayload = {
  __typename?: 'ProductPayload';
  _id?: Maybe<Scalars['String']>;
  compatibility?: Maybe<Scalars['String']>;
  connectivity?: Maybe<Scalars['String']>;
  countInStock?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
  dimensions?: Maybe<Scalars['String']>;
  image?: Maybe<Media>;
  manufacturer?: Maybe<Scalars['String']>;
  modelNumber?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  powerSource?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  totalComment?: Maybe<Scalars['Float']>;
  totalLike?: Maybe<Scalars['Float']>;
  totalSold?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Float']>;
  video?: Maybe<Scalars['String']>;
  warranty?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['String']>;
};

export type ProductType = {
  __typename?: 'ProductType';
  _id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type ProductTypeInput = {
  name: Scalars['String'];
};

export enum Provider {
  Apple = 'Apple',
  Facebook = 'Facebook',
  Google = 'Google'
}

export type Query = {
  __typename?: 'Query';
  detailOrder: OrderDto;
  getAdmin: AdminPayload;
  getIdAdmin: GetIdAdminResponse;
  getListProduct: GetListProductResponse;
  getMe: UserDtoType;
  getProduct: GetProductResponse;
  isFavoriteProduct: BooleanPayload;
  listCart: ListCartType;
  listComment: ListCommentResponse;
  listConversation?: Maybe<ListConversationResponse>;
  listFeedback: ListCommentResponse;
  listMessage: ListMessageResponse;
  listOrderAdmin: ListOrderResponse;
  listOrderUser: ListOrderResponse;
  listType: GetListTypeResponse;
  listUser: ListUserResponse;
};


export type QueryDetailOrderArgs = {
  input: ConfirmOrderInput;
};


export type QueryGetListProductArgs = {
  input: GetListProductInput;
};


export type QueryGetProductArgs = {
  input: ReadProductInputDto;
};


export type QueryIsFavoriteProductArgs = {
  input: IsFavoriteProductInput;
};


export type QueryListCommentArgs = {
  input: ListCommentInput;
};


export type QueryListConversationArgs = {
  input: ListConversationInput;
};


export type QueryListFeedbackArgs = {
  input: ListFeedbackInput;
};


export type QueryListMessageArgs = {
  input: ListMessageInput;
};

export type ReadProductInputDto = {
  productId: Scalars['String'];
};

export type RegisterUserInputDto = {
  fullName: Scalars['String'];
  password: Scalars['String'];
  phoneNumber: Scalars['String'];
};

export type RegisterUserResponse = {
  __typename?: 'RegisterUserResponse';
  fullName: Scalars['String'];
  otpExpiredTime: Scalars['Float'];
  phoneNumber?: Maybe<Scalars['String']>;
  sessionId: Scalars['String'];
};

export type RemoveFromCartInput = {
  _id: Scalars['String'];
};

export type SendEmailResponse = {
  __typename?: 'SendEmailResponse';
  sessionId?: Maybe<Scalars['String']>;
};

export type SendOtpRequestInput = {
  phoneNumber: Scalars['String'];
};

export type SendOtpResponse = {
  __typename?: 'SendOtpResponse';
  otpExpiredTime?: Maybe<Scalars['Float']>;
  phoneNumber?: Maybe<Scalars['String']>;
  sessionId?: Maybe<Scalars['String']>;
};

export type SendPinCodeInput = {
  email: Scalars['String'];
};

export enum ShippingStatus {
  NotShipped = 'NOT_SHIPPED',
  Shipped = 'SHIPPED',
  Shipping = 'SHIPPING'
}

export type Subscription = {
  __typename?: 'Subscription';
  onSendMessage: CommentResponse;
};


export type SubscriptionOnSendMessageArgs = {
  productId: Scalars['String'];
};

export type UpdateAvatarInput = {
  avatarId?: InputMaybe<Scalars['String']>;
};

export type UpdateProductInputDto = {
  productId: Scalars['String'];
  updateInput: ProductInputDto;
};

export type UpdateProfileInputDto = {
  address?: InputMaybe<Scalars['String']>;
  avatarId?: InputMaybe<Scalars['String']>;
  birthday?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  fullName?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Gender>;
};

export type UpdateProfileResponse = {
  __typename?: 'UpdateProfileResponse';
  updated: Scalars['Boolean'];
};

export type UserDtoType = {
  __typename?: 'UserDtoType';
  _id?: Maybe<Scalars['ID']>;
  active?: Maybe<Scalars['Boolean']>;
  address?: Maybe<Scalars['String']>;
  avatarId?: Maybe<Media>;
  birthday?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['Float']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['Float']>;
  deletedBy?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  gender?: Maybe<Gender>;
  phoneNumber?: Maybe<Scalars['String']>;
  provider?: Maybe<Provider>;
  providerId?: Maybe<Scalars['String']>;
  twoFactorAuthenticationSecret?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['Float']>;
  updatedBy?: Maybe<Scalars['String']>;
  verified?: Maybe<Scalars['Boolean']>;
  verifyEmail?: Maybe<Scalars['Boolean']>;
  verifyPhone?: Maybe<Scalars['Boolean']>;
};

export type UserPayload = {
  __typename?: 'UserPayload';
  _id: Scalars['String'];
  address?: Maybe<Scalars['String']>;
  avatarId?: Maybe<Media>;
  birthday?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Float']>;
  email?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  gender?: Maybe<Gender>;
  password?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  twoFactorAuthenticationSecret?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['Float']>;
  verified?: Maybe<Scalars['Boolean']>;
  verifyEmail?: Maybe<Scalars['Boolean']>;
  verifyPhone?: Maybe<Scalars['Boolean']>;
};

export type VerifyEmailInput = {
  otp: Scalars['String'];
  sessionId: Scalars['String'];
};

export type VerifyPhoneInputDto = {
  otp: Scalars['String'];
  sessionId: Scalars['String'];
};

export type VerifyPhoneResponse = {
  __typename?: 'VerifyPhoneResponse';
  verified: Scalars['Boolean'];
};

export type AdminLoginMutationVariables = Exact<{
  input: AdminInputDto;
}>;


export type AdminLoginMutation = { __typename?: 'Mutation', adminLogin: { __typename?: 'AdminLoginResponse', token: string, refreshToken: string, expiresAt: string, payload: { __typename?: 'AdminPayload', _id?: string | null, fullName?: string | null, userName?: string | null } } };

export type ListConversationQueryVariables = Exact<{
  input: ListConversationInput;
}>;


export type ListConversationQuery = { __typename?: 'Query', listConversation?: { __typename?: 'ListConversationResponse', data?: Array<{ __typename?: 'ConversationDtoType', _id: string, ownerId?: string | null, type: ConversationType, name: string, members?: Array<{ __typename?: 'UserDtoType', _id?: string | null, fullName?: string | null, avatarId?: { __typename?: 'Media', url?: string | null } | null } | null> | null }> | null } | null };

export type ListMessageQueryVariables = Exact<{
  input: ListMessageInput;
}>;


export type ListMessageQuery = { __typename?: 'Query', listMessage: { __typename?: 'ListMessageResponse', data: Array<{ __typename?: 'MessageDtoType', content: string, createdAt?: number | null, senderId?: { __typename?: 'UserDtoType', _id?: string | null, fullName?: string | null, avatarId?: { __typename?: 'Media', url?: string | null } | null } | null }> } };

export type ConfirmOrderMutationVariables = Exact<{
  input: ConfirmOrderInput;
}>;


export type ConfirmOrderMutation = { __typename?: 'Mutation', confirmOrder: { __typename?: 'BooleanPayload', success?: boolean | null } };

export type DetailOrderQueryVariables = Exact<{
  input: ConfirmOrderInput;
}>;


export type DetailOrderQuery = { __typename?: 'Query', detailOrder: { __typename?: 'OrderDto', _id?: string | null, code?: string | null, createdAt?: number | null, description?: string | null, status?: OrderStatus | null, subTotal?: number | null, shippingStatus?: ShippingStatus | null, shippingAddress?: string | null, paymentMethod?: PaymentMethod | null, amount?: number | null, items?: Array<{ __typename?: 'OrderItemResponse', name?: string | null, quantity: number, id?: { __typename?: 'ProductPayload', _id?: string | null, price?: number | null, name?: string | null, image?: { __typename?: 'Media', url?: string | null } | null } | null }> | null, transaction?: { __typename?: 'OrderTransactionType', id?: string | null, gateway?: string | null } | null, userId?: { __typename?: 'UserDtoType', fullName?: string | null, phoneNumber?: string | null, avatarId?: { __typename?: 'Media', url?: string | null } | null } | null } };

export type ListOrderAdminQueryVariables = Exact<{ [key: string]: never; }>;


export type ListOrderAdminQuery = { __typename?: 'Query', listOrderAdmin: { __typename?: 'ListOrderResponse', orders?: Array<{ __typename?: 'OrderDto', _id?: string | null, code?: string | null, status?: OrderStatus | null, amount?: number | null, description?: string | null, couponCode?: string | null, discountAmount?: number | null, subTotal?: number | null, paymentMethod?: PaymentMethod | null, shippingStatus?: ShippingStatus | null, shippingAddress?: string | null, createdAt?: number | null, transaction?: { __typename?: 'OrderTransactionType', gateway?: string | null, id?: string | null, time?: number | null } | null, items?: Array<{ __typename?: 'OrderItemResponse', name?: string | null, quantity: number, price: number, id?: { __typename?: 'ProductPayload', _id?: string | null, name?: string | null, image?: { __typename?: 'Media', url?: string | null } | null } | null }> | null, userId?: { __typename?: 'UserDtoType', _id?: string | null, fullName?: string | null, avatarId?: { __typename?: 'Media', url?: string | null } | null } | null }> | null } };

export type PrintOrderMutationVariables = Exact<{
  input: ConfirmOrderInput;
}>;


export type PrintOrderMutation = { __typename?: 'Mutation', printOrder: { __typename?: 'PrintOrderType', pdfPath?: string | null } };

export type CreateCommentAdminMutationVariables = Exact<{
  input: CreateCommentInput;
}>;


export type CreateCommentAdminMutation = { __typename?: 'Mutation', createCommentAdmin: { __typename?: 'CommentResponse', _id: string, message: string, productId?: string | null } };

export type CreateProductMutationVariables = Exact<{
  input: CreateProductInputDto;
}>;


export type CreateProductMutation = { __typename?: 'Mutation', createProduct: { __typename?: 'BooleanPayload', success?: boolean | null } };

export type CreateTypeMutationVariables = Exact<{
  input: ProductTypeInput;
}>;


export type CreateTypeMutation = { __typename?: 'Mutation', createType: { __typename?: 'BooleanPayload', success?: boolean | null } };

export type DeleteProductMutationVariables = Exact<{
  input: ReadProductInputDto;
}>;


export type DeleteProductMutation = { __typename?: 'Mutation', deleteProduct: { __typename?: 'BooleanPayload', success?: boolean | null } };

export type DeleteTypeMutationVariables = Exact<{
  input: DeleteTypeInput;
}>;


export type DeleteTypeMutation = { __typename?: 'Mutation', deleteType: { __typename?: 'BooleanPayload', success?: boolean | null } };

export type GetListCommentQueryVariables = Exact<{
  input: ListCommentInput;
}>;


export type GetListCommentQuery = { __typename?: 'Query', listComment: { __typename?: 'ListCommentResponse', data?: Array<{ __typename?: 'CommentResponse', _id: string, message: string, countFeedback?: number | null, createdAt?: number | null, user?: { __typename?: 'UserDtoType', fullName?: string | null, avatarId?: { __typename?: 'Media', url?: string | null } | null } | null }> | null } };

export type GetListFeedbackQueryVariables = Exact<{
  input: ListFeedbackInput;
}>;


export type GetListFeedbackQuery = { __typename?: 'Query', listFeedback: { __typename?: 'ListCommentResponse', data?: Array<{ __typename?: 'CommentResponse', _id: string, parentId?: string | null, message: string, createdAt?: number | null, user?: { __typename?: 'UserDtoType', fullName?: string | null, avatarId?: { __typename?: 'Media', url?: string | null } | null } | null }> | null } };

export type GetListProductQueryVariables = Exact<{
  input: GetListProductInput;
}>;


export type GetListProductQuery = { __typename?: 'Query', getListProduct: { __typename?: 'GetListProductResponse', products?: Array<{ __typename?: 'ProductPayload', _id?: string | null, name?: string | null, createdAt?: number | null, updatedAt?: number | null, image?: { __typename?: 'Media', url?: string | null } | null }> | null } };

export type GetProductQueryVariables = Exact<{
  input: ReadProductInputDto;
}>;


export type GetProductQuery = { __typename?: 'Query', getProduct: { __typename?: 'GetProductResponse', product?: { __typename?: 'ProductPayload', _id?: string | null, name?: string | null, description?: string | null, price?: number | null, countInStock?: number | null, manufacturer?: string | null, modelNumber?: string | null, dimensions?: string | null, weight?: string | null, connectivity?: string | null, powerSource?: string | null, compatibility?: string | null, warranty?: string | null, totalLike?: number | null, totalComment?: number | null, type?: string | null, totalSold?: number | null, image?: { __typename?: 'Media', url?: string | null, _id?: string | null } | null } | null } };

export type ListTypeQueryVariables = Exact<{ [key: string]: never; }>;


export type ListTypeQuery = { __typename?: 'Query', listType: { __typename?: 'GetListTypeResponse', data?: Array<{ __typename?: 'ProductType', _id?: string | null, name?: string | null }> | null } };

export type UpdateProductMutationVariables = Exact<{
  input: UpdateProductInputDto;
}>;


export type UpdateProductMutation = { __typename?: 'Mutation', updateProduct: { __typename?: 'BooleanPayload', success?: boolean | null } };

export type ListUserQueryVariables = Exact<{ [key: string]: never; }>;


export type ListUserQuery = { __typename?: 'Query', listUser: { __typename?: 'ListUserResponse', user: Array<{ __typename?: 'UserDtoType', createdAt?: number | null, _id?: string | null, fullName?: string | null, email?: string | null, phoneNumber?: string | null, verifyEmail?: boolean | null, verifyPhone?: boolean | null, verified?: boolean | null, gender?: Gender | null, birthday?: number | null, address?: string | null, provider?: Provider | null, active?: boolean | null, avatarId?: { __typename?: 'Media', _id?: string | null, url?: string | null } | null }> } };

export type LockOrUnLockUserMutationVariables = Exact<{
  input: LockOrUnLockUserInput;
}>;


export type LockOrUnLockUserMutation = { __typename?: 'Mutation', lockOrUnLockUser: { __typename?: 'BooleanPayload', success?: boolean | null } };

export type GetAdminQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAdminQuery = { __typename?: 'Query', getAdmin: { __typename?: 'AdminPayload', fullName?: string | null, userName?: string | null, _id?: string | null } };


export const AdminLoginDocument = `
    mutation adminLogin($input: AdminInputDto!) {
  adminLogin(input: $input) {
    token
    refreshToken
    expiresAt
    payload {
      _id
      fullName
      userName
    }
  }
}
    `;
export const useAdminLoginMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<AdminLoginMutation, TError, AdminLoginMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<AdminLoginMutation, TError, AdminLoginMutationVariables, TContext>(
      ['adminLogin'],
      (variables?: AdminLoginMutationVariables) => fetcher<AdminLoginMutation, AdminLoginMutationVariables>(client, AdminLoginDocument, variables, headers)(),
      options
    );
export const ListConversationDocument = `
    query listConversation($input: ListConversationInput!) {
  listConversation(input: $input) {
    data {
      _id
      members {
        _id
        fullName
        avatarId {
          url
        }
      }
      ownerId
      type
      name
    }
  }
}
    `;
export const useListConversationQuery = <
      TData = ListConversationQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: ListConversationQueryVariables,
      options?: UseQueryOptions<ListConversationQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<ListConversationQuery, TError, TData>(
      ['listConversation', variables],
      fetcher<ListConversationQuery, ListConversationQueryVariables>(client, ListConversationDocument, variables, headers),
      options
    );
export const ListMessageDocument = `
    query listMessage($input: ListMessageInput!) {
  listMessage(input: $input) {
    data {
      senderId {
        _id
        fullName
        avatarId {
          url
        }
      }
      content
      createdAt
    }
  }
}
    `;
export const useListMessageQuery = <
      TData = ListMessageQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: ListMessageQueryVariables,
      options?: UseQueryOptions<ListMessageQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<ListMessageQuery, TError, TData>(
      ['listMessage', variables],
      fetcher<ListMessageQuery, ListMessageQueryVariables>(client, ListMessageDocument, variables, headers),
      options
    );
export const ConfirmOrderDocument = `
    mutation confirmOrder($input: ConfirmOrderInput!) {
  confirmOrder(input: $input) {
    success
  }
}
    `;
export const useConfirmOrderMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<ConfirmOrderMutation, TError, ConfirmOrderMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<ConfirmOrderMutation, TError, ConfirmOrderMutationVariables, TContext>(
      ['confirmOrder'],
      (variables?: ConfirmOrderMutationVariables) => fetcher<ConfirmOrderMutation, ConfirmOrderMutationVariables>(client, ConfirmOrderDocument, variables, headers)(),
      options
    );
export const DetailOrderDocument = `
    query detailOrder($input: ConfirmOrderInput!) {
  detailOrder(input: $input) {
    _id
    code
    createdAt
    description
    status
    subTotal
    shippingStatus
    shippingAddress
    paymentMethod
    items {
      id {
        _id
        price
        name
        image {
          url
        }
      }
      name
      quantity
    }
    transaction {
      id
      gateway
    }
    amount
    userId {
      fullName
      phoneNumber
      avatarId {
        url
      }
    }
  }
}
    `;
export const useDetailOrderQuery = <
      TData = DetailOrderQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: DetailOrderQueryVariables,
      options?: UseQueryOptions<DetailOrderQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<DetailOrderQuery, TError, TData>(
      ['detailOrder', variables],
      fetcher<DetailOrderQuery, DetailOrderQueryVariables>(client, DetailOrderDocument, variables, headers),
      options
    );
export const ListOrderAdminDocument = `
    query listOrderAdmin {
  listOrderAdmin {
    orders {
      _id
      code
      status
      amount
      description
      couponCode
      discountAmount
      subTotal
      paymentMethod
      transaction {
        gateway
        id
        time
      }
      items {
        id {
          _id
          name
          image {
            url
          }
        }
        name
        quantity
        price
      }
      shippingStatus
      shippingAddress
      createdAt
      userId {
        _id
        fullName
        avatarId {
          url
        }
      }
    }
  }
}
    `;
export const useListOrderAdminQuery = <
      TData = ListOrderAdminQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: ListOrderAdminQueryVariables,
      options?: UseQueryOptions<ListOrderAdminQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<ListOrderAdminQuery, TError, TData>(
      variables === undefined ? ['listOrderAdmin'] : ['listOrderAdmin', variables],
      fetcher<ListOrderAdminQuery, ListOrderAdminQueryVariables>(client, ListOrderAdminDocument, variables, headers),
      options
    );
export const PrintOrderDocument = `
    mutation printOrder($input: ConfirmOrderInput!) {
  printOrder(input: $input) {
    pdfPath
  }
}
    `;
export const usePrintOrderMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<PrintOrderMutation, TError, PrintOrderMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<PrintOrderMutation, TError, PrintOrderMutationVariables, TContext>(
      ['printOrder'],
      (variables?: PrintOrderMutationVariables) => fetcher<PrintOrderMutation, PrintOrderMutationVariables>(client, PrintOrderDocument, variables, headers)(),
      options
    );
export const CreateCommentAdminDocument = `
    mutation createCommentAdmin($input: CreateCommentInput!) {
  createCommentAdmin(input: $input) {
    _id
    message
    productId
  }
}
    `;
export const useCreateCommentAdminMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<CreateCommentAdminMutation, TError, CreateCommentAdminMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<CreateCommentAdminMutation, TError, CreateCommentAdminMutationVariables, TContext>(
      ['createCommentAdmin'],
      (variables?: CreateCommentAdminMutationVariables) => fetcher<CreateCommentAdminMutation, CreateCommentAdminMutationVariables>(client, CreateCommentAdminDocument, variables, headers)(),
      options
    );
export const CreateProductDocument = `
    mutation createProduct($input: CreateProductInputDto!) {
  createProduct(input: $input) {
    success
  }
}
    `;
export const useCreateProductMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<CreateProductMutation, TError, CreateProductMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<CreateProductMutation, TError, CreateProductMutationVariables, TContext>(
      ['createProduct'],
      (variables?: CreateProductMutationVariables) => fetcher<CreateProductMutation, CreateProductMutationVariables>(client, CreateProductDocument, variables, headers)(),
      options
    );
export const CreateTypeDocument = `
    mutation createType($input: ProductTypeInput!) {
  createType(input: $input) {
    success
  }
}
    `;
export const useCreateTypeMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<CreateTypeMutation, TError, CreateTypeMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<CreateTypeMutation, TError, CreateTypeMutationVariables, TContext>(
      ['createType'],
      (variables?: CreateTypeMutationVariables) => fetcher<CreateTypeMutation, CreateTypeMutationVariables>(client, CreateTypeDocument, variables, headers)(),
      options
    );
export const DeleteProductDocument = `
    mutation deleteProduct($input: ReadProductInputDto!) {
  deleteProduct(input: $input) {
    success
  }
}
    `;
export const useDeleteProductMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<DeleteProductMutation, TError, DeleteProductMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<DeleteProductMutation, TError, DeleteProductMutationVariables, TContext>(
      ['deleteProduct'],
      (variables?: DeleteProductMutationVariables) => fetcher<DeleteProductMutation, DeleteProductMutationVariables>(client, DeleteProductDocument, variables, headers)(),
      options
    );
export const DeleteTypeDocument = `
    mutation deleteType($input: DeleteTypeInput!) {
  deleteType(input: $input) {
    success
  }
}
    `;
export const useDeleteTypeMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<DeleteTypeMutation, TError, DeleteTypeMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<DeleteTypeMutation, TError, DeleteTypeMutationVariables, TContext>(
      ['deleteType'],
      (variables?: DeleteTypeMutationVariables) => fetcher<DeleteTypeMutation, DeleteTypeMutationVariables>(client, DeleteTypeDocument, variables, headers)(),
      options
    );
export const GetListCommentDocument = `
    query getListComment($input: ListCommentInput!) {
  listComment(input: $input) {
    data {
      _id
      user {
        avatarId {
          url
        }
        fullName
      }
      message
      countFeedback
      createdAt
    }
  }
}
    `;
export const useGetListCommentQuery = <
      TData = GetListCommentQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetListCommentQueryVariables,
      options?: UseQueryOptions<GetListCommentQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetListCommentQuery, TError, TData>(
      ['getListComment', variables],
      fetcher<GetListCommentQuery, GetListCommentQueryVariables>(client, GetListCommentDocument, variables, headers),
      options
    );
export const GetListFeedbackDocument = `
    query getListFeedback($input: ListFeedbackInput!) {
  listFeedback(input: $input) {
    data {
      _id
      user {
        avatarId {
          url
        }
        fullName
      }
      parentId
      message
      createdAt
    }
  }
}
    `;
export const useGetListFeedbackQuery = <
      TData = GetListFeedbackQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetListFeedbackQueryVariables,
      options?: UseQueryOptions<GetListFeedbackQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetListFeedbackQuery, TError, TData>(
      ['getListFeedback', variables],
      fetcher<GetListFeedbackQuery, GetListFeedbackQueryVariables>(client, GetListFeedbackDocument, variables, headers),
      options
    );
export const GetListProductDocument = `
    query getListProduct($input: GetListProductInput!) {
  getListProduct(input: $input) {
    products {
      _id
      name
      image {
        url
      }
      createdAt
      updatedAt
    }
  }
}
    `;
export const useGetListProductQuery = <
      TData = GetListProductQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetListProductQueryVariables,
      options?: UseQueryOptions<GetListProductQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetListProductQuery, TError, TData>(
      ['getListProduct', variables],
      fetcher<GetListProductQuery, GetListProductQueryVariables>(client, GetListProductDocument, variables, headers),
      options
    );
export const GetProductDocument = `
    query getProduct($input: ReadProductInputDto!) {
  getProduct(input: $input) {
    product {
      _id
      name
      description
      price
      countInStock
      image {
        url
        _id
      }
      manufacturer
      modelNumber
      dimensions
      weight
      connectivity
      powerSource
      compatibility
      warranty
      totalLike
      totalComment
      type
      totalSold
    }
  }
}
    `;
export const useGetProductQuery = <
      TData = GetProductQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetProductQueryVariables,
      options?: UseQueryOptions<GetProductQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetProductQuery, TError, TData>(
      ['getProduct', variables],
      fetcher<GetProductQuery, GetProductQueryVariables>(client, GetProductDocument, variables, headers),
      options
    );
export const ListTypeDocument = `
    query ListType {
  listType {
    data {
      _id
      name
    }
  }
}
    `;
export const useListTypeQuery = <
      TData = ListTypeQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: ListTypeQueryVariables,
      options?: UseQueryOptions<ListTypeQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<ListTypeQuery, TError, TData>(
      variables === undefined ? ['ListType'] : ['ListType', variables],
      fetcher<ListTypeQuery, ListTypeQueryVariables>(client, ListTypeDocument, variables, headers),
      options
    );
export const UpdateProductDocument = `
    mutation updateProduct($input: UpdateProductInputDto!) {
  updateProduct(input: $input) {
    success
  }
}
    `;
export const useUpdateProductMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<UpdateProductMutation, TError, UpdateProductMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<UpdateProductMutation, TError, UpdateProductMutationVariables, TContext>(
      ['updateProduct'],
      (variables?: UpdateProductMutationVariables) => fetcher<UpdateProductMutation, UpdateProductMutationVariables>(client, UpdateProductDocument, variables, headers)(),
      options
    );
export const ListUserDocument = `
    query listUser {
  listUser {
    user {
      createdAt
      _id
      fullName
      email
      phoneNumber
      verifyEmail
      verifyPhone
      verified
      gender
      birthday
      address
      provider
      avatarId {
        _id
        url
      }
      active
    }
  }
}
    `;
export const useListUserQuery = <
      TData = ListUserQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: ListUserQueryVariables,
      options?: UseQueryOptions<ListUserQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<ListUserQuery, TError, TData>(
      variables === undefined ? ['listUser'] : ['listUser', variables],
      fetcher<ListUserQuery, ListUserQueryVariables>(client, ListUserDocument, variables, headers),
      options
    );
export const LockOrUnLockUserDocument = `
    mutation lockOrUnLockUser($input: LockOrUnLockUserInput!) {
  lockOrUnLockUser(input: $input) {
    success
  }
}
    `;
export const useLockOrUnLockUserMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<LockOrUnLockUserMutation, TError, LockOrUnLockUserMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<LockOrUnLockUserMutation, TError, LockOrUnLockUserMutationVariables, TContext>(
      ['lockOrUnLockUser'],
      (variables?: LockOrUnLockUserMutationVariables) => fetcher<LockOrUnLockUserMutation, LockOrUnLockUserMutationVariables>(client, LockOrUnLockUserDocument, variables, headers)(),
      options
    );
export const GetAdminDocument = `
    query getAdmin {
  getAdmin {
    fullName
    userName
    _id
  }
}
    `;
export const useGetAdminQuery = <
      TData = GetAdminQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetAdminQueryVariables,
      options?: UseQueryOptions<GetAdminQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetAdminQuery, TError, TData>(
      variables === undefined ? ['getAdmin'] : ['getAdmin', variables],
      fetcher<GetAdminQuery, GetAdminQueryVariables>(client, GetAdminDocument, variables, headers),
      options
    );