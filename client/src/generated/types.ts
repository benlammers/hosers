export type Maybe<T> = T;
export type InputMaybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type AvifOptions = {
  lossless: InputMaybe<Scalars['Boolean']>;
  quality: InputMaybe<Scalars['Int']>;
  speed: InputMaybe<Scalars['Int']>;
};

export type BlurredOptions = {
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  toFormat: InputMaybe<ImageFormat>;
  /** Width of the generated low-res preview. Default is 20px */
  width: InputMaybe<Scalars['Int']>;
};

export type BooleanQueryOperatorInput = {
  eq: InputMaybe<Scalars['Boolean']>;
  in: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  ne: InputMaybe<Scalars['Boolean']>;
  nin: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
};

export type DateQueryOperatorInput = {
  eq: InputMaybe<Scalars['Date']>;
  gt: InputMaybe<Scalars['Date']>;
  gte: InputMaybe<Scalars['Date']>;
  in: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  lt: InputMaybe<Scalars['Date']>;
  lte: InputMaybe<Scalars['Date']>;
  ne: InputMaybe<Scalars['Date']>;
  nin: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
};

export type Directory = Node & {
  __typename?: 'Directory';
  absolutePath: Scalars['String'];
  accessTime: Scalars['Date'];
  atime: Scalars['Date'];
  atimeMs: Scalars['Float'];
  base: Scalars['String'];
  birthTime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs: Maybe<Scalars['Float']>;
  changeTime: Scalars['Date'];
  children: Array<Node>;
  ctime: Scalars['Date'];
  ctimeMs: Scalars['Float'];
  dev: Scalars['Int'];
  dir: Scalars['String'];
  ext: Scalars['String'];
  extension: Scalars['String'];
  gid: Scalars['Int'];
  id: Scalars['ID'];
  ino: Scalars['Float'];
  internal: Internal;
  mode: Scalars['Int'];
  modifiedTime: Scalars['Date'];
  mtime: Scalars['Date'];
  mtimeMs: Scalars['Float'];
  name: Scalars['String'];
  nlink: Scalars['Int'];
  parent: Maybe<Node>;
  prettySize: Scalars['String'];
  rdev: Scalars['Int'];
  relativeDirectory: Scalars['String'];
  relativePath: Scalars['String'];
  root: Scalars['String'];
  size: Scalars['Int'];
  sourceInstanceName: Scalars['String'];
  uid: Scalars['Int'];
};


export type DirectoryAccessTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type DirectoryModifiedTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

export type DirectoryConnection = {
  __typename?: 'DirectoryConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<DirectoryEdge>;
  group: Array<DirectoryGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  field: DirectoryFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type DirectoryConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  __typename?: 'DirectoryEdge';
  next: Maybe<Directory>;
  node: Directory;
  previous: Maybe<Directory>;
};

export enum DirectoryFieldsEnum {
  absolutePath = 'absolutePath',
  accessTime = 'accessTime',
  atime = 'atime',
  atimeMs = 'atimeMs',
  base = 'base',
  birthTime = 'birthTime',
  birthtime = 'birthtime',
  birthtimeMs = 'birthtimeMs',
  changeTime = 'changeTime',
  children = 'children',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  ctime = 'ctime',
  ctimeMs = 'ctimeMs',
  dev = 'dev',
  dir = 'dir',
  ext = 'ext',
  extension = 'extension',
  gid = 'gid',
  id = 'id',
  ino = 'ino',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  mode = 'mode',
  modifiedTime = 'modifiedTime',
  mtime = 'mtime',
  mtimeMs = 'mtimeMs',
  name = 'name',
  nlink = 'nlink',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id',
  prettySize = 'prettySize',
  rdev = 'rdev',
  relativeDirectory = 'relativeDirectory',
  relativePath = 'relativePath',
  root = 'root',
  size = 'size',
  sourceInstanceName = 'sourceInstanceName',
  uid = 'uid'
}

export type DirectoryFilterInput = {
  absolutePath: InputMaybe<StringQueryOperatorInput>;
  accessTime: InputMaybe<DateQueryOperatorInput>;
  atime: InputMaybe<DateQueryOperatorInput>;
  atimeMs: InputMaybe<FloatQueryOperatorInput>;
  base: InputMaybe<StringQueryOperatorInput>;
  birthTime: InputMaybe<DateQueryOperatorInput>;
  birthtime: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs: InputMaybe<FloatQueryOperatorInput>;
  changeTime: InputMaybe<DateQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  ctime: InputMaybe<DateQueryOperatorInput>;
  ctimeMs: InputMaybe<FloatQueryOperatorInput>;
  dev: InputMaybe<IntQueryOperatorInput>;
  dir: InputMaybe<StringQueryOperatorInput>;
  ext: InputMaybe<StringQueryOperatorInput>;
  extension: InputMaybe<StringQueryOperatorInput>;
  gid: InputMaybe<IntQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  ino: InputMaybe<FloatQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  mode: InputMaybe<IntQueryOperatorInput>;
  modifiedTime: InputMaybe<DateQueryOperatorInput>;
  mtime: InputMaybe<DateQueryOperatorInput>;
  mtimeMs: InputMaybe<FloatQueryOperatorInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  nlink: InputMaybe<IntQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  prettySize: InputMaybe<StringQueryOperatorInput>;
  rdev: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory: InputMaybe<StringQueryOperatorInput>;
  relativePath: InputMaybe<StringQueryOperatorInput>;
  root: InputMaybe<StringQueryOperatorInput>;
  size: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName: InputMaybe<StringQueryOperatorInput>;
  uid: InputMaybe<IntQueryOperatorInput>;
};

export type DirectoryGroupConnection = {
  __typename?: 'DirectoryGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<DirectoryEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<DirectoryGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type DirectoryGroupConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionGroupArgs = {
  field: DirectoryFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type DirectoryGroupConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectorySortInput = {
  fields: InputMaybe<Array<InputMaybe<DirectoryFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type DuotoneGradient = {
  highlight: Scalars['String'];
  opacity: InputMaybe<Scalars['Int']>;
  shadow: Scalars['String'];
};

export type File = Node & {
  __typename?: 'File';
  absolutePath: Scalars['String'];
  accessTime: Scalars['Date'];
  atime: Scalars['Date'];
  atimeMs: Scalars['Float'];
  base: Scalars['String'];
  birthTime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs: Maybe<Scalars['Float']>;
  blksize: Maybe<Scalars['Int']>;
  blocks: Maybe<Scalars['Int']>;
  changeTime: Scalars['Date'];
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp: Maybe<ImageSharp>;
  children: Array<Node>;
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp: Maybe<Array<Maybe<ImageSharp>>>;
  ctime: Scalars['Date'];
  ctimeMs: Scalars['Float'];
  dev: Scalars['Int'];
  dir: Scalars['String'];
  ext: Scalars['String'];
  extension: Scalars['String'];
  gid: Scalars['Int'];
  id: Scalars['ID'];
  ino: Scalars['Float'];
  internal: Internal;
  mode: Scalars['Int'];
  modifiedTime: Scalars['Date'];
  mtime: Scalars['Date'];
  mtimeMs: Scalars['Float'];
  name: Scalars['String'];
  nlink: Scalars['Int'];
  parent: Maybe<Node>;
  prettySize: Scalars['String'];
  /** Copy file to static directory and return public url to it */
  publicURL: Maybe<Scalars['String']>;
  rdev: Scalars['Int'];
  relativeDirectory: Scalars['String'];
  relativePath: Scalars['String'];
  root: Scalars['String'];
  size: Scalars['Int'];
  sourceInstanceName: Scalars['String'];
  uid: Scalars['Int'];
};


export type FileAccessTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type FileModifiedTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

export type FileConnection = {
  __typename?: 'FileConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<FileEdge>;
  group: Array<FileGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  field: FileFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type FileConnectionMaxArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionMinArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionSumArgs = {
  field: FileFieldsEnum;
};

export type FileEdge = {
  __typename?: 'FileEdge';
  next: Maybe<File>;
  node: File;
  previous: Maybe<File>;
};

export enum FileFieldsEnum {
  absolutePath = 'absolutePath',
  accessTime = 'accessTime',
  atime = 'atime',
  atimeMs = 'atimeMs',
  base = 'base',
  birthTime = 'birthTime',
  birthtime = 'birthtime',
  birthtimeMs = 'birthtimeMs',
  blksize = 'blksize',
  blocks = 'blocks',
  changeTime = 'changeTime',
  childImageSharp___children = 'childImageSharp___children',
  childImageSharp___children___children = 'childImageSharp___children___children',
  childImageSharp___children___children___children = 'childImageSharp___children___children___children',
  childImageSharp___children___children___id = 'childImageSharp___children___children___id',
  childImageSharp___children___id = 'childImageSharp___children___id',
  childImageSharp___children___internal___content = 'childImageSharp___children___internal___content',
  childImageSharp___children___internal___contentDigest = 'childImageSharp___children___internal___contentDigest',
  childImageSharp___children___internal___description = 'childImageSharp___children___internal___description',
  childImageSharp___children___internal___fieldOwners = 'childImageSharp___children___internal___fieldOwners',
  childImageSharp___children___internal___ignoreType = 'childImageSharp___children___internal___ignoreType',
  childImageSharp___children___internal___mediaType = 'childImageSharp___children___internal___mediaType',
  childImageSharp___children___internal___owner = 'childImageSharp___children___internal___owner',
  childImageSharp___children___internal___type = 'childImageSharp___children___internal___type',
  childImageSharp___children___parent___children = 'childImageSharp___children___parent___children',
  childImageSharp___children___parent___id = 'childImageSharp___children___parent___id',
  childImageSharp___fixed___aspectRatio = 'childImageSharp___fixed___aspectRatio',
  childImageSharp___fixed___base64 = 'childImageSharp___fixed___base64',
  childImageSharp___fixed___height = 'childImageSharp___fixed___height',
  childImageSharp___fixed___originalName = 'childImageSharp___fixed___originalName',
  childImageSharp___fixed___src = 'childImageSharp___fixed___src',
  childImageSharp___fixed___srcSet = 'childImageSharp___fixed___srcSet',
  childImageSharp___fixed___srcSetWebp = 'childImageSharp___fixed___srcSetWebp',
  childImageSharp___fixed___srcWebp = 'childImageSharp___fixed___srcWebp',
  childImageSharp___fixed___tracedSVG = 'childImageSharp___fixed___tracedSVG',
  childImageSharp___fixed___width = 'childImageSharp___fixed___width',
  childImageSharp___fluid___aspectRatio = 'childImageSharp___fluid___aspectRatio',
  childImageSharp___fluid___base64 = 'childImageSharp___fluid___base64',
  childImageSharp___fluid___originalImg = 'childImageSharp___fluid___originalImg',
  childImageSharp___fluid___originalName = 'childImageSharp___fluid___originalName',
  childImageSharp___fluid___presentationHeight = 'childImageSharp___fluid___presentationHeight',
  childImageSharp___fluid___presentationWidth = 'childImageSharp___fluid___presentationWidth',
  childImageSharp___fluid___sizes = 'childImageSharp___fluid___sizes',
  childImageSharp___fluid___src = 'childImageSharp___fluid___src',
  childImageSharp___fluid___srcSet = 'childImageSharp___fluid___srcSet',
  childImageSharp___fluid___srcSetWebp = 'childImageSharp___fluid___srcSetWebp',
  childImageSharp___fluid___srcWebp = 'childImageSharp___fluid___srcWebp',
  childImageSharp___fluid___tracedSVG = 'childImageSharp___fluid___tracedSVG',
  childImageSharp___gatsbyImageData = 'childImageSharp___gatsbyImageData',
  childImageSharp___id = 'childImageSharp___id',
  childImageSharp___internal___content = 'childImageSharp___internal___content',
  childImageSharp___internal___contentDigest = 'childImageSharp___internal___contentDigest',
  childImageSharp___internal___description = 'childImageSharp___internal___description',
  childImageSharp___internal___fieldOwners = 'childImageSharp___internal___fieldOwners',
  childImageSharp___internal___ignoreType = 'childImageSharp___internal___ignoreType',
  childImageSharp___internal___mediaType = 'childImageSharp___internal___mediaType',
  childImageSharp___internal___owner = 'childImageSharp___internal___owner',
  childImageSharp___internal___type = 'childImageSharp___internal___type',
  childImageSharp___original___height = 'childImageSharp___original___height',
  childImageSharp___original___src = 'childImageSharp___original___src',
  childImageSharp___original___width = 'childImageSharp___original___width',
  childImageSharp___parent___children = 'childImageSharp___parent___children',
  childImageSharp___parent___children___children = 'childImageSharp___parent___children___children',
  childImageSharp___parent___children___id = 'childImageSharp___parent___children___id',
  childImageSharp___parent___id = 'childImageSharp___parent___id',
  childImageSharp___parent___internal___content = 'childImageSharp___parent___internal___content',
  childImageSharp___parent___internal___contentDigest = 'childImageSharp___parent___internal___contentDigest',
  childImageSharp___parent___internal___description = 'childImageSharp___parent___internal___description',
  childImageSharp___parent___internal___fieldOwners = 'childImageSharp___parent___internal___fieldOwners',
  childImageSharp___parent___internal___ignoreType = 'childImageSharp___parent___internal___ignoreType',
  childImageSharp___parent___internal___mediaType = 'childImageSharp___parent___internal___mediaType',
  childImageSharp___parent___internal___owner = 'childImageSharp___parent___internal___owner',
  childImageSharp___parent___internal___type = 'childImageSharp___parent___internal___type',
  childImageSharp___parent___parent___children = 'childImageSharp___parent___parent___children',
  childImageSharp___parent___parent___id = 'childImageSharp___parent___parent___id',
  childImageSharp___resize___aspectRatio = 'childImageSharp___resize___aspectRatio',
  childImageSharp___resize___height = 'childImageSharp___resize___height',
  childImageSharp___resize___originalName = 'childImageSharp___resize___originalName',
  childImageSharp___resize___src = 'childImageSharp___resize___src',
  childImageSharp___resize___tracedSVG = 'childImageSharp___resize___tracedSVG',
  childImageSharp___resize___width = 'childImageSharp___resize___width',
  children = 'children',
  childrenImageSharp = 'childrenImageSharp',
  childrenImageSharp___children = 'childrenImageSharp___children',
  childrenImageSharp___children___children = 'childrenImageSharp___children___children',
  childrenImageSharp___children___children___children = 'childrenImageSharp___children___children___children',
  childrenImageSharp___children___children___id = 'childrenImageSharp___children___children___id',
  childrenImageSharp___children___id = 'childrenImageSharp___children___id',
  childrenImageSharp___children___internal___content = 'childrenImageSharp___children___internal___content',
  childrenImageSharp___children___internal___contentDigest = 'childrenImageSharp___children___internal___contentDigest',
  childrenImageSharp___children___internal___description = 'childrenImageSharp___children___internal___description',
  childrenImageSharp___children___internal___fieldOwners = 'childrenImageSharp___children___internal___fieldOwners',
  childrenImageSharp___children___internal___ignoreType = 'childrenImageSharp___children___internal___ignoreType',
  childrenImageSharp___children___internal___mediaType = 'childrenImageSharp___children___internal___mediaType',
  childrenImageSharp___children___internal___owner = 'childrenImageSharp___children___internal___owner',
  childrenImageSharp___children___internal___type = 'childrenImageSharp___children___internal___type',
  childrenImageSharp___children___parent___children = 'childrenImageSharp___children___parent___children',
  childrenImageSharp___children___parent___id = 'childrenImageSharp___children___parent___id',
  childrenImageSharp___fixed___aspectRatio = 'childrenImageSharp___fixed___aspectRatio',
  childrenImageSharp___fixed___base64 = 'childrenImageSharp___fixed___base64',
  childrenImageSharp___fixed___height = 'childrenImageSharp___fixed___height',
  childrenImageSharp___fixed___originalName = 'childrenImageSharp___fixed___originalName',
  childrenImageSharp___fixed___src = 'childrenImageSharp___fixed___src',
  childrenImageSharp___fixed___srcSet = 'childrenImageSharp___fixed___srcSet',
  childrenImageSharp___fixed___srcSetWebp = 'childrenImageSharp___fixed___srcSetWebp',
  childrenImageSharp___fixed___srcWebp = 'childrenImageSharp___fixed___srcWebp',
  childrenImageSharp___fixed___tracedSVG = 'childrenImageSharp___fixed___tracedSVG',
  childrenImageSharp___fixed___width = 'childrenImageSharp___fixed___width',
  childrenImageSharp___fluid___aspectRatio = 'childrenImageSharp___fluid___aspectRatio',
  childrenImageSharp___fluid___base64 = 'childrenImageSharp___fluid___base64',
  childrenImageSharp___fluid___originalImg = 'childrenImageSharp___fluid___originalImg',
  childrenImageSharp___fluid___originalName = 'childrenImageSharp___fluid___originalName',
  childrenImageSharp___fluid___presentationHeight = 'childrenImageSharp___fluid___presentationHeight',
  childrenImageSharp___fluid___presentationWidth = 'childrenImageSharp___fluid___presentationWidth',
  childrenImageSharp___fluid___sizes = 'childrenImageSharp___fluid___sizes',
  childrenImageSharp___fluid___src = 'childrenImageSharp___fluid___src',
  childrenImageSharp___fluid___srcSet = 'childrenImageSharp___fluid___srcSet',
  childrenImageSharp___fluid___srcSetWebp = 'childrenImageSharp___fluid___srcSetWebp',
  childrenImageSharp___fluid___srcWebp = 'childrenImageSharp___fluid___srcWebp',
  childrenImageSharp___fluid___tracedSVG = 'childrenImageSharp___fluid___tracedSVG',
  childrenImageSharp___gatsbyImageData = 'childrenImageSharp___gatsbyImageData',
  childrenImageSharp___id = 'childrenImageSharp___id',
  childrenImageSharp___internal___content = 'childrenImageSharp___internal___content',
  childrenImageSharp___internal___contentDigest = 'childrenImageSharp___internal___contentDigest',
  childrenImageSharp___internal___description = 'childrenImageSharp___internal___description',
  childrenImageSharp___internal___fieldOwners = 'childrenImageSharp___internal___fieldOwners',
  childrenImageSharp___internal___ignoreType = 'childrenImageSharp___internal___ignoreType',
  childrenImageSharp___internal___mediaType = 'childrenImageSharp___internal___mediaType',
  childrenImageSharp___internal___owner = 'childrenImageSharp___internal___owner',
  childrenImageSharp___internal___type = 'childrenImageSharp___internal___type',
  childrenImageSharp___original___height = 'childrenImageSharp___original___height',
  childrenImageSharp___original___src = 'childrenImageSharp___original___src',
  childrenImageSharp___original___width = 'childrenImageSharp___original___width',
  childrenImageSharp___parent___children = 'childrenImageSharp___parent___children',
  childrenImageSharp___parent___children___children = 'childrenImageSharp___parent___children___children',
  childrenImageSharp___parent___children___id = 'childrenImageSharp___parent___children___id',
  childrenImageSharp___parent___id = 'childrenImageSharp___parent___id',
  childrenImageSharp___parent___internal___content = 'childrenImageSharp___parent___internal___content',
  childrenImageSharp___parent___internal___contentDigest = 'childrenImageSharp___parent___internal___contentDigest',
  childrenImageSharp___parent___internal___description = 'childrenImageSharp___parent___internal___description',
  childrenImageSharp___parent___internal___fieldOwners = 'childrenImageSharp___parent___internal___fieldOwners',
  childrenImageSharp___parent___internal___ignoreType = 'childrenImageSharp___parent___internal___ignoreType',
  childrenImageSharp___parent___internal___mediaType = 'childrenImageSharp___parent___internal___mediaType',
  childrenImageSharp___parent___internal___owner = 'childrenImageSharp___parent___internal___owner',
  childrenImageSharp___parent___internal___type = 'childrenImageSharp___parent___internal___type',
  childrenImageSharp___parent___parent___children = 'childrenImageSharp___parent___parent___children',
  childrenImageSharp___parent___parent___id = 'childrenImageSharp___parent___parent___id',
  childrenImageSharp___resize___aspectRatio = 'childrenImageSharp___resize___aspectRatio',
  childrenImageSharp___resize___height = 'childrenImageSharp___resize___height',
  childrenImageSharp___resize___originalName = 'childrenImageSharp___resize___originalName',
  childrenImageSharp___resize___src = 'childrenImageSharp___resize___src',
  childrenImageSharp___resize___tracedSVG = 'childrenImageSharp___resize___tracedSVG',
  childrenImageSharp___resize___width = 'childrenImageSharp___resize___width',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  ctime = 'ctime',
  ctimeMs = 'ctimeMs',
  dev = 'dev',
  dir = 'dir',
  ext = 'ext',
  extension = 'extension',
  gid = 'gid',
  id = 'id',
  ino = 'ino',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  mode = 'mode',
  modifiedTime = 'modifiedTime',
  mtime = 'mtime',
  mtimeMs = 'mtimeMs',
  name = 'name',
  nlink = 'nlink',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id',
  prettySize = 'prettySize',
  publicURL = 'publicURL',
  rdev = 'rdev',
  relativeDirectory = 'relativeDirectory',
  relativePath = 'relativePath',
  root = 'root',
  size = 'size',
  sourceInstanceName = 'sourceInstanceName',
  uid = 'uid'
}

export type FileFilterInput = {
  absolutePath: InputMaybe<StringQueryOperatorInput>;
  accessTime: InputMaybe<DateQueryOperatorInput>;
  atime: InputMaybe<DateQueryOperatorInput>;
  atimeMs: InputMaybe<FloatQueryOperatorInput>;
  base: InputMaybe<StringQueryOperatorInput>;
  birthTime: InputMaybe<DateQueryOperatorInput>;
  birthtime: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs: InputMaybe<FloatQueryOperatorInput>;
  blksize: InputMaybe<IntQueryOperatorInput>;
  blocks: InputMaybe<IntQueryOperatorInput>;
  changeTime: InputMaybe<DateQueryOperatorInput>;
  childImageSharp: InputMaybe<ImageSharpFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  childrenImageSharp: InputMaybe<ImageSharpFilterListInput>;
  ctime: InputMaybe<DateQueryOperatorInput>;
  ctimeMs: InputMaybe<FloatQueryOperatorInput>;
  dev: InputMaybe<IntQueryOperatorInput>;
  dir: InputMaybe<StringQueryOperatorInput>;
  ext: InputMaybe<StringQueryOperatorInput>;
  extension: InputMaybe<StringQueryOperatorInput>;
  gid: InputMaybe<IntQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  ino: InputMaybe<FloatQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  mode: InputMaybe<IntQueryOperatorInput>;
  modifiedTime: InputMaybe<DateQueryOperatorInput>;
  mtime: InputMaybe<DateQueryOperatorInput>;
  mtimeMs: InputMaybe<FloatQueryOperatorInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  nlink: InputMaybe<IntQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  prettySize: InputMaybe<StringQueryOperatorInput>;
  publicURL: InputMaybe<StringQueryOperatorInput>;
  rdev: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory: InputMaybe<StringQueryOperatorInput>;
  relativePath: InputMaybe<StringQueryOperatorInput>;
  root: InputMaybe<StringQueryOperatorInput>;
  size: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName: InputMaybe<StringQueryOperatorInput>;
  uid: InputMaybe<IntQueryOperatorInput>;
};

export type FileGroupConnection = {
  __typename?: 'FileGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<FileEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<FileGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type FileGroupConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionGroupArgs = {
  field: FileFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type FileGroupConnectionMaxArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionMinArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionSumArgs = {
  field: FileFieldsEnum;
};

export type FileSortInput = {
  fields: InputMaybe<Array<InputMaybe<FileFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq: InputMaybe<Scalars['Float']>;
  gt: InputMaybe<Scalars['Float']>;
  gte: InputMaybe<Scalars['Float']>;
  in: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt: InputMaybe<Scalars['Float']>;
  lte: InputMaybe<Scalars['Float']>;
  ne: InputMaybe<Scalars['Float']>;
  nin: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export enum GatsbyImageFormat {
  AUTO = 'AUTO',
  AVIF = 'AVIF',
  JPG = 'JPG',
  NO_CHANGE = 'NO_CHANGE',
  PNG = 'PNG',
  WEBP = 'WEBP'
}

export enum GatsbyImageLayout {
  CONSTRAINED = 'CONSTRAINED',
  FIXED = 'FIXED',
  FULL_WIDTH = 'FULL_WIDTH'
}

export enum GatsbyImagePlaceholder {
  BLURRED = 'BLURRED',
  DOMINANT_COLOR = 'DOMINANT_COLOR',
  NONE = 'NONE',
  TRACED_SVG = 'TRACED_SVG'
}

export enum ImageCropFocus {
  ATTENTION = 'ATTENTION',
  CENTER = 'CENTER',
  EAST = 'EAST',
  ENTROPY = 'ENTROPY',
  NORTH = 'NORTH',
  NORTHEAST = 'NORTHEAST',
  NORTHWEST = 'NORTHWEST',
  SOUTH = 'SOUTH',
  SOUTHEAST = 'SOUTHEAST',
  SOUTHWEST = 'SOUTHWEST',
  WEST = 'WEST'
}

export enum ImageFit {
  CONTAIN = 'CONTAIN',
  COVER = 'COVER',
  FILL = 'FILL',
  INSIDE = 'INSIDE',
  OUTSIDE = 'OUTSIDE'
}

export enum ImageFormat {
  AUTO = 'AUTO',
  AVIF = 'AVIF',
  JPG = 'JPG',
  NO_CHANGE = 'NO_CHANGE',
  PNG = 'PNG',
  WEBP = 'WEBP'
}

export enum ImageLayout {
  CONSTRAINED = 'CONSTRAINED',
  FIXED = 'FIXED',
  FULL_WIDTH = 'FULL_WIDTH'
}

export enum ImagePlaceholder {
  BLURRED = 'BLURRED',
  DOMINANT_COLOR = 'DOMINANT_COLOR',
  NONE = 'NONE',
  TRACED_SVG = 'TRACED_SVG'
}

export type ImageSharp = Node & {
  __typename?: 'ImageSharp';
  children: Array<Node>;
  fixed: Maybe<ImageSharpFixed>;
  fluid: Maybe<ImageSharpFluid>;
  gatsbyImageData: Scalars['JSON'];
  id: Scalars['ID'];
  internal: Internal;
  original: Maybe<ImageSharpOriginal>;
  parent: Maybe<Node>;
  resize: Maybe<ImageSharpResize>;
};


export type ImageSharpFixedArgs = {
  background?: InputMaybe<Scalars['String']>;
  base64Width: InputMaybe<Scalars['Int']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  height: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  jpegQuality: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  pngQuality: InputMaybe<Scalars['Int']>;
  quality: InputMaybe<Scalars['Int']>;
  rotate?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  traceSVG: InputMaybe<Potrace>;
  trim?: InputMaybe<Scalars['Float']>;
  webpQuality: InputMaybe<Scalars['Int']>;
  width: InputMaybe<Scalars['Int']>;
};


export type ImageSharpFluidArgs = {
  background?: InputMaybe<Scalars['String']>;
  base64Width: InputMaybe<Scalars['Int']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  jpegQuality: InputMaybe<Scalars['Int']>;
  maxHeight: InputMaybe<Scalars['Int']>;
  maxWidth: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  pngQuality: InputMaybe<Scalars['Int']>;
  quality: InputMaybe<Scalars['Int']>;
  rotate?: InputMaybe<Scalars['Int']>;
  sizes?: InputMaybe<Scalars['String']>;
  srcSetBreakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  traceSVG: InputMaybe<Potrace>;
  trim?: InputMaybe<Scalars['Float']>;
  webpQuality: InputMaybe<Scalars['Int']>;
};


export type ImageSharpGatsbyImageDataArgs = {
  aspectRatio: InputMaybe<Scalars['Float']>;
  avifOptions: InputMaybe<AvifOptions>;
  backgroundColor: InputMaybe<Scalars['String']>;
  blurredOptions: InputMaybe<BlurredOptions>;
  breakpoints: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  formats: InputMaybe<Array<InputMaybe<ImageFormat>>>;
  height: InputMaybe<Scalars['Int']>;
  jpgOptions: InputMaybe<JpgOptions>;
  layout?: InputMaybe<ImageLayout>;
  outputPixelDensities: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  placeholder: InputMaybe<ImagePlaceholder>;
  pngOptions: InputMaybe<PngOptions>;
  quality: InputMaybe<Scalars['Int']>;
  sizes: InputMaybe<Scalars['String']>;
  tracedSVGOptions: InputMaybe<Potrace>;
  transformOptions: InputMaybe<TransformOptions>;
  webpOptions: InputMaybe<WebPOptions>;
  width: InputMaybe<Scalars['Int']>;
};


export type ImageSharpResizeArgs = {
  background?: InputMaybe<Scalars['String']>;
  base64?: InputMaybe<Scalars['Boolean']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  height: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  jpegQuality: InputMaybe<Scalars['Int']>;
  pngCompressionLevel?: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  pngQuality: InputMaybe<Scalars['Int']>;
  quality: InputMaybe<Scalars['Int']>;
  rotate?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  traceSVG: InputMaybe<Potrace>;
  trim?: InputMaybe<Scalars['Float']>;
  webpQuality: InputMaybe<Scalars['Int']>;
  width: InputMaybe<Scalars['Int']>;
};

export type ImageSharpConnection = {
  __typename?: 'ImageSharpConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<ImageSharpEdge>;
  group: Array<ImageSharpGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionGroupArgs = {
  field: ImageSharpFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type ImageSharpConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  __typename?: 'ImageSharpEdge';
  next: Maybe<ImageSharp>;
  node: ImageSharp;
  previous: Maybe<ImageSharp>;
};

export enum ImageSharpFieldsEnum {
  children = 'children',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  fixed___aspectRatio = 'fixed___aspectRatio',
  fixed___base64 = 'fixed___base64',
  fixed___height = 'fixed___height',
  fixed___originalName = 'fixed___originalName',
  fixed___src = 'fixed___src',
  fixed___srcSet = 'fixed___srcSet',
  fixed___srcSetWebp = 'fixed___srcSetWebp',
  fixed___srcWebp = 'fixed___srcWebp',
  fixed___tracedSVG = 'fixed___tracedSVG',
  fixed___width = 'fixed___width',
  fluid___aspectRatio = 'fluid___aspectRatio',
  fluid___base64 = 'fluid___base64',
  fluid___originalImg = 'fluid___originalImg',
  fluid___originalName = 'fluid___originalName',
  fluid___presentationHeight = 'fluid___presentationHeight',
  fluid___presentationWidth = 'fluid___presentationWidth',
  fluid___sizes = 'fluid___sizes',
  fluid___src = 'fluid___src',
  fluid___srcSet = 'fluid___srcSet',
  fluid___srcSetWebp = 'fluid___srcSetWebp',
  fluid___srcWebp = 'fluid___srcWebp',
  fluid___tracedSVG = 'fluid___tracedSVG',
  gatsbyImageData = 'gatsbyImageData',
  id = 'id',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  original___height = 'original___height',
  original___src = 'original___src',
  original___width = 'original___width',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id',
  resize___aspectRatio = 'resize___aspectRatio',
  resize___height = 'resize___height',
  resize___originalName = 'resize___originalName',
  resize___src = 'resize___src',
  resize___tracedSVG = 'resize___tracedSVG',
  resize___width = 'resize___width'
}

export type ImageSharpFilterInput = {
  children: InputMaybe<NodeFilterListInput>;
  fixed: InputMaybe<ImageSharpFixedFilterInput>;
  fluid: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData: InputMaybe<JsonQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  original: InputMaybe<ImageSharpOriginalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  resize: InputMaybe<ImageSharpResizeFilterInput>;
};

export type ImageSharpFilterListInput = {
  elemMatch: InputMaybe<ImageSharpFilterInput>;
};

export type ImageSharpFixed = {
  __typename?: 'ImageSharpFixed';
  aspectRatio: Maybe<Scalars['Float']>;
  base64: Maybe<Scalars['String']>;
  height: Scalars['Float'];
  originalName: Maybe<Scalars['String']>;
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcSetWebp: Maybe<Scalars['String']>;
  srcWebp: Maybe<Scalars['String']>;
  tracedSVG: Maybe<Scalars['String']>;
  width: Scalars['Float'];
};

export type ImageSharpFixedFilterInput = {
  aspectRatio: InputMaybe<FloatQueryOperatorInput>;
  base64: InputMaybe<StringQueryOperatorInput>;
  height: InputMaybe<FloatQueryOperatorInput>;
  originalName: InputMaybe<StringQueryOperatorInput>;
  src: InputMaybe<StringQueryOperatorInput>;
  srcSet: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp: InputMaybe<StringQueryOperatorInput>;
  srcWebp: InputMaybe<StringQueryOperatorInput>;
  tracedSVG: InputMaybe<StringQueryOperatorInput>;
  width: InputMaybe<FloatQueryOperatorInput>;
};

export type ImageSharpFluid = {
  __typename?: 'ImageSharpFluid';
  aspectRatio: Scalars['Float'];
  base64: Maybe<Scalars['String']>;
  originalImg: Maybe<Scalars['String']>;
  originalName: Maybe<Scalars['String']>;
  presentationHeight: Scalars['Int'];
  presentationWidth: Scalars['Int'];
  sizes: Scalars['String'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcSetWebp: Maybe<Scalars['String']>;
  srcWebp: Maybe<Scalars['String']>;
  tracedSVG: Maybe<Scalars['String']>;
};

export type ImageSharpFluidFilterInput = {
  aspectRatio: InputMaybe<FloatQueryOperatorInput>;
  base64: InputMaybe<StringQueryOperatorInput>;
  originalImg: InputMaybe<StringQueryOperatorInput>;
  originalName: InputMaybe<StringQueryOperatorInput>;
  presentationHeight: InputMaybe<IntQueryOperatorInput>;
  presentationWidth: InputMaybe<IntQueryOperatorInput>;
  sizes: InputMaybe<StringQueryOperatorInput>;
  src: InputMaybe<StringQueryOperatorInput>;
  srcSet: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp: InputMaybe<StringQueryOperatorInput>;
  srcWebp: InputMaybe<StringQueryOperatorInput>;
  tracedSVG: InputMaybe<StringQueryOperatorInput>;
};

export type ImageSharpGroupConnection = {
  __typename?: 'ImageSharpGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<ImageSharpEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<ImageSharpGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ImageSharpGroupConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionGroupArgs = {
  field: ImageSharpFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type ImageSharpGroupConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpOriginal = {
  __typename?: 'ImageSharpOriginal';
  height: Maybe<Scalars['Float']>;
  src: Maybe<Scalars['String']>;
  width: Maybe<Scalars['Float']>;
};

export type ImageSharpOriginalFilterInput = {
  height: InputMaybe<FloatQueryOperatorInput>;
  src: InputMaybe<StringQueryOperatorInput>;
  width: InputMaybe<FloatQueryOperatorInput>;
};

export type ImageSharpResize = {
  __typename?: 'ImageSharpResize';
  aspectRatio: Maybe<Scalars['Float']>;
  height: Maybe<Scalars['Int']>;
  originalName: Maybe<Scalars['String']>;
  src: Maybe<Scalars['String']>;
  tracedSVG: Maybe<Scalars['String']>;
  width: Maybe<Scalars['Int']>;
};

export type ImageSharpResizeFilterInput = {
  aspectRatio: InputMaybe<FloatQueryOperatorInput>;
  height: InputMaybe<IntQueryOperatorInput>;
  originalName: InputMaybe<StringQueryOperatorInput>;
  src: InputMaybe<StringQueryOperatorInput>;
  tracedSVG: InputMaybe<StringQueryOperatorInput>;
  width: InputMaybe<IntQueryOperatorInput>;
};

export type ImageSharpSortInput = {
  fields: InputMaybe<Array<InputMaybe<ImageSharpFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type IntQueryOperatorInput = {
  eq: InputMaybe<Scalars['Int']>;
  gt: InputMaybe<Scalars['Int']>;
  gte: InputMaybe<Scalars['Int']>;
  in: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt: InputMaybe<Scalars['Int']>;
  lte: InputMaybe<Scalars['Int']>;
  ne: InputMaybe<Scalars['Int']>;
  nin: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type Internal = {
  __typename?: 'Internal';
  content: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description: Maybe<Scalars['String']>;
  fieldOwners: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType: Maybe<Scalars['Boolean']>;
  mediaType: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type InternalFilterInput = {
  content: InputMaybe<StringQueryOperatorInput>;
  contentDigest: InputMaybe<StringQueryOperatorInput>;
  description: InputMaybe<StringQueryOperatorInput>;
  fieldOwners: InputMaybe<StringQueryOperatorInput>;
  ignoreType: InputMaybe<BooleanQueryOperatorInput>;
  mediaType: InputMaybe<StringQueryOperatorInput>;
  owner: InputMaybe<StringQueryOperatorInput>;
  type: InputMaybe<StringQueryOperatorInput>;
};

export type JpgOptions = {
  progressive: InputMaybe<Scalars['Boolean']>;
  quality: InputMaybe<Scalars['Int']>;
};

export type JsonQueryOperatorInput = {
  eq: InputMaybe<Scalars['JSON']>;
  glob: InputMaybe<Scalars['JSON']>;
  in: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  ne: InputMaybe<Scalars['JSON']>;
  nin: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  regex: InputMaybe<Scalars['JSON']>;
};

/** Node Interface */
export type Node = {
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  parent: Maybe<Node>;
};

export type NodeFilterInput = {
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch: InputMaybe<NodeFilterInput>;
};

export type PngOptions = {
  compressionSpeed: InputMaybe<Scalars['Int']>;
  quality: InputMaybe<Scalars['Int']>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  currentPage: Scalars['Int'];
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type Potrace = {
  alphaMax: InputMaybe<Scalars['Float']>;
  background: InputMaybe<Scalars['String']>;
  blackOnWhite: InputMaybe<Scalars['Boolean']>;
  color: InputMaybe<Scalars['String']>;
  optCurve: InputMaybe<Scalars['Boolean']>;
  optTolerance: InputMaybe<Scalars['Float']>;
  threshold: InputMaybe<Scalars['Int']>;
  turdSize: InputMaybe<Scalars['Float']>;
  turnPolicy: InputMaybe<PotraceTurnPolicy>;
};

export enum PotraceTurnPolicy {
  TURNPOLICY_BLACK = 'TURNPOLICY_BLACK',
  TURNPOLICY_LEFT = 'TURNPOLICY_LEFT',
  TURNPOLICY_MAJORITY = 'TURNPOLICY_MAJORITY',
  TURNPOLICY_MINORITY = 'TURNPOLICY_MINORITY',
  TURNPOLICY_RIGHT = 'TURNPOLICY_RIGHT',
  TURNPOLICY_WHITE = 'TURNPOLICY_WHITE'
}

export type Query = {
  __typename?: 'Query';
  allDirectory: DirectoryConnection;
  allFile: FileConnection;
  allImageSharp: ImageSharpConnection;
  allSanityFileAsset: SanityFileAssetConnection;
  allSanityHome: SanityHomeConnection;
  allSanityImageAsset: SanityImageAssetConnection;
  allSanityInfo: SanityInfoConnection;
  allSanityLocation: SanityLocationConnection;
  allSanityService: SanityServiceConnection;
  allSanityTimelineItem: SanityTimelineItemConnection;
  allSite: SiteConnection;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  allSiteFunction: SiteFunctionConnection;
  allSitePage: SitePageConnection;
  allSitePlugin: SitePluginConnection;
  allStaticImage: StaticImageConnection;
  directory: Maybe<Directory>;
  file: Maybe<File>;
  imageSharp: Maybe<ImageSharp>;
  sanityFileAsset: Maybe<SanityFileAsset>;
  sanityHome: Maybe<SanityHome>;
  sanityImageAsset: Maybe<SanityImageAsset>;
  sanityInfo: Maybe<SanityInfo>;
  sanityLocation: Maybe<SanityLocation>;
  sanityService: Maybe<SanityService>;
  sanityTimelineItem: Maybe<SanityTimelineItem>;
  site: Maybe<Site>;
  siteBuildMetadata: Maybe<SiteBuildMetadata>;
  siteFunction: Maybe<SiteFunction>;
  sitePage: Maybe<SitePage>;
  sitePlugin: Maybe<SitePlugin>;
  staticImage: Maybe<StaticImage>;
};


export type QueryAllDirectoryArgs = {
  filter: InputMaybe<DirectoryFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<DirectorySortInput>;
};


export type QueryAllFileArgs = {
  filter: InputMaybe<FileFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<FileSortInput>;
};


export type QueryAllImageSharpArgs = {
  filter: InputMaybe<ImageSharpFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ImageSharpSortInput>;
};


export type QueryAllSanityFileAssetArgs = {
  filter: InputMaybe<SanityFileAssetFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<SanityFileAssetSortInput>;
};


export type QueryAllSanityHomeArgs = {
  filter: InputMaybe<SanityHomeFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<SanityHomeSortInput>;
};


export type QueryAllSanityImageAssetArgs = {
  filter: InputMaybe<SanityImageAssetFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<SanityImageAssetSortInput>;
};


export type QueryAllSanityInfoArgs = {
  filter: InputMaybe<SanityInfoFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<SanityInfoSortInput>;
};


export type QueryAllSanityLocationArgs = {
  filter: InputMaybe<SanityLocationFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<SanityLocationSortInput>;
};


export type QueryAllSanityServiceArgs = {
  filter: InputMaybe<SanityServiceFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<SanityServiceSortInput>;
};


export type QueryAllSanityTimelineItemArgs = {
  filter: InputMaybe<SanityTimelineItemFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<SanityTimelineItemSortInput>;
};


export type QueryAllSiteArgs = {
  filter: InputMaybe<SiteFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<SiteSortInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter: InputMaybe<SiteBuildMetadataFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<SiteBuildMetadataSortInput>;
};


export type QueryAllSiteFunctionArgs = {
  filter: InputMaybe<SiteFunctionFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<SiteFunctionSortInput>;
};


export type QueryAllSitePageArgs = {
  filter: InputMaybe<SitePageFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<SitePageSortInput>;
};


export type QueryAllSitePluginArgs = {
  filter: InputMaybe<SitePluginFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<SitePluginSortInput>;
};


export type QueryAllStaticImageArgs = {
  filter: InputMaybe<StaticImageFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<StaticImageSortInput>;
};


export type QueryDirectoryArgs = {
  absolutePath: InputMaybe<StringQueryOperatorInput>;
  accessTime: InputMaybe<DateQueryOperatorInput>;
  atime: InputMaybe<DateQueryOperatorInput>;
  atimeMs: InputMaybe<FloatQueryOperatorInput>;
  base: InputMaybe<StringQueryOperatorInput>;
  birthTime: InputMaybe<DateQueryOperatorInput>;
  birthtime: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs: InputMaybe<FloatQueryOperatorInput>;
  changeTime: InputMaybe<DateQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  ctime: InputMaybe<DateQueryOperatorInput>;
  ctimeMs: InputMaybe<FloatQueryOperatorInput>;
  dev: InputMaybe<IntQueryOperatorInput>;
  dir: InputMaybe<StringQueryOperatorInput>;
  ext: InputMaybe<StringQueryOperatorInput>;
  extension: InputMaybe<StringQueryOperatorInput>;
  gid: InputMaybe<IntQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  ino: InputMaybe<FloatQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  mode: InputMaybe<IntQueryOperatorInput>;
  modifiedTime: InputMaybe<DateQueryOperatorInput>;
  mtime: InputMaybe<DateQueryOperatorInput>;
  mtimeMs: InputMaybe<FloatQueryOperatorInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  nlink: InputMaybe<IntQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  prettySize: InputMaybe<StringQueryOperatorInput>;
  rdev: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory: InputMaybe<StringQueryOperatorInput>;
  relativePath: InputMaybe<StringQueryOperatorInput>;
  root: InputMaybe<StringQueryOperatorInput>;
  size: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName: InputMaybe<StringQueryOperatorInput>;
  uid: InputMaybe<IntQueryOperatorInput>;
};


export type QueryFileArgs = {
  absolutePath: InputMaybe<StringQueryOperatorInput>;
  accessTime: InputMaybe<DateQueryOperatorInput>;
  atime: InputMaybe<DateQueryOperatorInput>;
  atimeMs: InputMaybe<FloatQueryOperatorInput>;
  base: InputMaybe<StringQueryOperatorInput>;
  birthTime: InputMaybe<DateQueryOperatorInput>;
  birthtime: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs: InputMaybe<FloatQueryOperatorInput>;
  blksize: InputMaybe<IntQueryOperatorInput>;
  blocks: InputMaybe<IntQueryOperatorInput>;
  changeTime: InputMaybe<DateQueryOperatorInput>;
  childImageSharp: InputMaybe<ImageSharpFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  childrenImageSharp: InputMaybe<ImageSharpFilterListInput>;
  ctime: InputMaybe<DateQueryOperatorInput>;
  ctimeMs: InputMaybe<FloatQueryOperatorInput>;
  dev: InputMaybe<IntQueryOperatorInput>;
  dir: InputMaybe<StringQueryOperatorInput>;
  ext: InputMaybe<StringQueryOperatorInput>;
  extension: InputMaybe<StringQueryOperatorInput>;
  gid: InputMaybe<IntQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  ino: InputMaybe<FloatQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  mode: InputMaybe<IntQueryOperatorInput>;
  modifiedTime: InputMaybe<DateQueryOperatorInput>;
  mtime: InputMaybe<DateQueryOperatorInput>;
  mtimeMs: InputMaybe<FloatQueryOperatorInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  nlink: InputMaybe<IntQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  prettySize: InputMaybe<StringQueryOperatorInput>;
  publicURL: InputMaybe<StringQueryOperatorInput>;
  rdev: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory: InputMaybe<StringQueryOperatorInput>;
  relativePath: InputMaybe<StringQueryOperatorInput>;
  root: InputMaybe<StringQueryOperatorInput>;
  size: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName: InputMaybe<StringQueryOperatorInput>;
  uid: InputMaybe<IntQueryOperatorInput>;
};


export type QueryImageSharpArgs = {
  children: InputMaybe<NodeFilterListInput>;
  fixed: InputMaybe<ImageSharpFixedFilterInput>;
  fluid: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData: InputMaybe<JsonQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  original: InputMaybe<ImageSharpOriginalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  resize: InputMaybe<ImageSharpResizeFilterInput>;
};


export type QuerySanityFileAssetArgs = {
  _createdAt: InputMaybe<DateQueryOperatorInput>;
  _id: InputMaybe<StringQueryOperatorInput>;
  _key: InputMaybe<StringQueryOperatorInput>;
  _rawSource: InputMaybe<JsonQueryOperatorInput>;
  _rev: InputMaybe<StringQueryOperatorInput>;
  _type: InputMaybe<StringQueryOperatorInput>;
  _updatedAt: InputMaybe<DateQueryOperatorInput>;
  altText: InputMaybe<StringQueryOperatorInput>;
  assetId: InputMaybe<StringQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  description: InputMaybe<StringQueryOperatorInput>;
  extension: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  label: InputMaybe<StringQueryOperatorInput>;
  mimeType: InputMaybe<StringQueryOperatorInput>;
  originalFilename: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  path: InputMaybe<StringQueryOperatorInput>;
  sha1hash: InputMaybe<StringQueryOperatorInput>;
  size: InputMaybe<FloatQueryOperatorInput>;
  source: InputMaybe<SanityAssetSourceDataFilterInput>;
  title: InputMaybe<StringQueryOperatorInput>;
  url: InputMaybe<StringQueryOperatorInput>;
};


export type QuerySanityHomeArgs = {
  _createdAt: InputMaybe<DateQueryOperatorInput>;
  _id: InputMaybe<StringQueryOperatorInput>;
  _key: InputMaybe<StringQueryOperatorInput>;
  _rawGiftCards: InputMaybe<JsonQueryOperatorInput>;
  _rawImage: InputMaybe<JsonQueryOperatorInput>;
  _rawLocations: InputMaybe<JsonQueryOperatorInput>;
  _rawPayment: InputMaybe<JsonQueryOperatorInput>;
  _rawServices: InputMaybe<JsonQueryOperatorInput>;
  _rawTimeline: InputMaybe<JsonQueryOperatorInput>;
  _rev: InputMaybe<StringQueryOperatorInput>;
  _type: InputMaybe<StringQueryOperatorInput>;
  _updatedAt: InputMaybe<DateQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  giftCards: InputMaybe<SanitySectionFilterInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  image: InputMaybe<SanityImageWithAltFilterInput>;
  internal: InputMaybe<InternalFilterInput>;
  locations: InputMaybe<SanitySectionFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  payment: InputMaybe<SanitySectionFilterInput>;
  services: InputMaybe<SanitySectionFilterInput>;
  timeline: InputMaybe<SanitySectionFilterInput>;
};


export type QuerySanityImageAssetArgs = {
  _createdAt: InputMaybe<DateQueryOperatorInput>;
  _id: InputMaybe<StringQueryOperatorInput>;
  _key: InputMaybe<StringQueryOperatorInput>;
  _rawMetadata: InputMaybe<JsonQueryOperatorInput>;
  _rawSource: InputMaybe<JsonQueryOperatorInput>;
  _rev: InputMaybe<StringQueryOperatorInput>;
  _type: InputMaybe<StringQueryOperatorInput>;
  _updatedAt: InputMaybe<DateQueryOperatorInput>;
  altText: InputMaybe<StringQueryOperatorInput>;
  assetId: InputMaybe<StringQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  description: InputMaybe<StringQueryOperatorInput>;
  extension: InputMaybe<StringQueryOperatorInput>;
  gatsbyImageData: InputMaybe<JsonQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  label: InputMaybe<StringQueryOperatorInput>;
  metadata: InputMaybe<SanityImageMetadataFilterInput>;
  mimeType: InputMaybe<StringQueryOperatorInput>;
  originalFilename: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  path: InputMaybe<StringQueryOperatorInput>;
  sha1hash: InputMaybe<StringQueryOperatorInput>;
  size: InputMaybe<FloatQueryOperatorInput>;
  source: InputMaybe<SanityAssetSourceDataFilterInput>;
  title: InputMaybe<StringQueryOperatorInput>;
  uploadId: InputMaybe<StringQueryOperatorInput>;
  url: InputMaybe<StringQueryOperatorInput>;
};


export type QuerySanityInfoArgs = {
  _createdAt: InputMaybe<DateQueryOperatorInput>;
  _id: InputMaybe<StringQueryOperatorInput>;
  _key: InputMaybe<StringQueryOperatorInput>;
  _rawLogo: InputMaybe<JsonQueryOperatorInput>;
  _rawLogoSmall: InputMaybe<JsonQueryOperatorInput>;
  _rev: InputMaybe<StringQueryOperatorInput>;
  _type: InputMaybe<StringQueryOperatorInput>;
  _updatedAt: InputMaybe<DateQueryOperatorInput>;
  address: InputMaybe<StringQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  email: InputMaybe<StringQueryOperatorInput>;
  erecieptLink: InputMaybe<StringQueryOperatorInput>;
  facebookLink: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  instagramLink: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  logo: InputMaybe<SanityImageWithAltFilterInput>;
  logoSmall: InputMaybe<SanityImageWithAltFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  phoneNumber: InputMaybe<StringQueryOperatorInput>;
};


export type QuerySanityLocationArgs = {
  _createdAt: InputMaybe<DateQueryOperatorInput>;
  _id: InputMaybe<StringQueryOperatorInput>;
  _key: InputMaybe<StringQueryOperatorInput>;
  _rawImages: InputMaybe<JsonQueryOperatorInput>;
  _rawLocation: InputMaybe<JsonQueryOperatorInput>;
  _rawServices: InputMaybe<JsonQueryOperatorInput>;
  _rawSlug: InputMaybe<JsonQueryOperatorInput>;
  _rev: InputMaybe<StringQueryOperatorInput>;
  _type: InputMaybe<StringQueryOperatorInput>;
  _updatedAt: InputMaybe<DateQueryOperatorInput>;
  address: InputMaybe<StringQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  images: InputMaybe<SanityImageWithAltFilterListInput>;
  internal: InputMaybe<InternalFilterInput>;
  location: InputMaybe<SanityGeopointFilterInput>;
  metaDescription: InputMaybe<StringQueryOperatorInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  services: InputMaybe<SanityAvailableServiceFilterListInput>;
  slug: InputMaybe<SanitySlugFilterInput>;
};


export type QuerySanityServiceArgs = {
  _createdAt: InputMaybe<DateQueryOperatorInput>;
  _id: InputMaybe<StringQueryOperatorInput>;
  _key: InputMaybe<StringQueryOperatorInput>;
  _rawIcon: InputMaybe<JsonQueryOperatorInput>;
  _rawImages: InputMaybe<JsonQueryOperatorInput>;
  _rawSelectionImage: InputMaybe<JsonQueryOperatorInput>;
  _rawSelections: InputMaybe<JsonQueryOperatorInput>;
  _rawSlug: InputMaybe<JsonQueryOperatorInput>;
  _rev: InputMaybe<StringQueryOperatorInput>;
  _type: InputMaybe<StringQueryOperatorInput>;
  _updatedAt: InputMaybe<DateQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  description: InputMaybe<StringQueryOperatorInput>;
  icon: InputMaybe<SanityImageWithAltFilterInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  images: InputMaybe<SanityImageWithAltFilterListInput>;
  internal: InputMaybe<InternalFilterInput>;
  isHighlighted: InputMaybe<BooleanQueryOperatorInput>;
  metaDescription: InputMaybe<StringQueryOperatorInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  selectionImage: InputMaybe<SanityImageWithAltFilterInput>;
  selections: InputMaybe<SanitySelectionFilterListInput>;
  slug: InputMaybe<SanitySlugFilterInput>;
};


export type QuerySanityTimelineItemArgs = {
  _createdAt: InputMaybe<DateQueryOperatorInput>;
  _id: InputMaybe<StringQueryOperatorInput>;
  _key: InputMaybe<StringQueryOperatorInput>;
  _rawIcon: InputMaybe<JsonQueryOperatorInput>;
  _rev: InputMaybe<StringQueryOperatorInput>;
  _type: InputMaybe<StringQueryOperatorInput>;
  _updatedAt: InputMaybe<DateQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  date: InputMaybe<DateQueryOperatorInput>;
  description: InputMaybe<StringQueryOperatorInput>;
  icon: InputMaybe<SanityImageWithAltFilterInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  title: InputMaybe<StringQueryOperatorInput>;
};


export type QuerySiteArgs = {
  buildTime: InputMaybe<DateQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  host: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  jsxRuntime: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  pathPrefix: InputMaybe<StringQueryOperatorInput>;
  polyfill: InputMaybe<BooleanQueryOperatorInput>;
  port: InputMaybe<IntQueryOperatorInput>;
  siteMetadata: InputMaybe<SiteSiteMetadataFilterInput>;
};


export type QuerySiteBuildMetadataArgs = {
  buildTime: InputMaybe<DateQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
};


export type QuerySiteFunctionArgs = {
  absoluteCompiledFilePath: InputMaybe<StringQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  functionRoute: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  matchPath: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  pluginName: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath: InputMaybe<StringQueryOperatorInput>;
};


export type QuerySitePageArgs = {
  children: InputMaybe<NodeFilterListInput>;
  component: InputMaybe<StringQueryOperatorInput>;
  componentChunkName: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  internalComponentName: InputMaybe<StringQueryOperatorInput>;
  matchPath: InputMaybe<StringQueryOperatorInput>;
  pageContext: InputMaybe<JsonQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  path: InputMaybe<StringQueryOperatorInput>;
  pluginCreator: InputMaybe<SitePluginFilterInput>;
};


export type QuerySitePluginArgs = {
  browserAPIs: InputMaybe<StringQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs: InputMaybe<StringQueryOperatorInput>;
  packageJson: InputMaybe<JsonQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  pluginFilepath: InputMaybe<StringQueryOperatorInput>;
  pluginOptions: InputMaybe<JsonQueryOperatorInput>;
  resolve: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs: InputMaybe<StringQueryOperatorInput>;
  version: InputMaybe<StringQueryOperatorInput>;
};


export type QueryStaticImageArgs = {
  absolutePath: InputMaybe<StringQueryOperatorInput>;
  accessTime: InputMaybe<DateQueryOperatorInput>;
  atime: InputMaybe<DateQueryOperatorInput>;
  atimeMs: InputMaybe<FloatQueryOperatorInput>;
  base: InputMaybe<StringQueryOperatorInput>;
  birthTime: InputMaybe<DateQueryOperatorInput>;
  birthtime: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs: InputMaybe<FloatQueryOperatorInput>;
  blksize: InputMaybe<IntQueryOperatorInput>;
  blocks: InputMaybe<IntQueryOperatorInput>;
  changeTime: InputMaybe<DateQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  ctime: InputMaybe<DateQueryOperatorInput>;
  ctimeMs: InputMaybe<FloatQueryOperatorInput>;
  dev: InputMaybe<FloatQueryOperatorInput>;
  dir: InputMaybe<StringQueryOperatorInput>;
  ext: InputMaybe<StringQueryOperatorInput>;
  extension: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  ino: InputMaybe<FloatQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  mode: InputMaybe<IntQueryOperatorInput>;
  modifiedTime: InputMaybe<DateQueryOperatorInput>;
  mtime: InputMaybe<DateQueryOperatorInput>;
  mtimeMs: InputMaybe<FloatQueryOperatorInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  nlink: InputMaybe<IntQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  prettySize: InputMaybe<StringQueryOperatorInput>;
  rdev: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory: InputMaybe<StringQueryOperatorInput>;
  relativePath: InputMaybe<StringQueryOperatorInput>;
  root: InputMaybe<StringQueryOperatorInput>;
  size: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName: InputMaybe<StringQueryOperatorInput>;
  uid: InputMaybe<IntQueryOperatorInput>;
};

export type SanityAssetSourceData = {
  __typename?: 'SanityAssetSourceData';
  _key: Maybe<Scalars['String']>;
  _type: Maybe<Scalars['String']>;
  id: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  url: Maybe<Scalars['String']>;
};

export type SanityAssetSourceDataFilterInput = {
  _key: InputMaybe<StringQueryOperatorInput>;
  _type: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  url: InputMaybe<StringQueryOperatorInput>;
};

export type SanityAvailableService = {
  __typename?: 'SanityAvailableService';
  _key: Maybe<Scalars['String']>;
  _rawService: Maybe<Scalars['JSON']>;
  _type: Maybe<Scalars['String']>;
  amount: Maybe<Scalars['Float']>;
  service: Maybe<SanityService>;
};


export type SanityAvailableService_RawServiceArgs = {
  resolveReferences: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityAvailableServiceFilterInput = {
  _key: InputMaybe<StringQueryOperatorInput>;
  _rawService: InputMaybe<JsonQueryOperatorInput>;
  _type: InputMaybe<StringQueryOperatorInput>;
  amount: InputMaybe<FloatQueryOperatorInput>;
  service: InputMaybe<SanityServiceFilterInput>;
};

export type SanityAvailableServiceFilterListInput = {
  elemMatch: InputMaybe<SanityAvailableServiceFilterInput>;
};

export type SanityBlock = {
  __typename?: 'SanityBlock';
  _key: Maybe<Scalars['String']>;
  _rawChildren: Maybe<Scalars['JSON']>;
  _type: Maybe<Scalars['String']>;
  children: Maybe<Array<Maybe<SanitySpan>>>;
  list: Maybe<Scalars['String']>;
  style: Maybe<Scalars['String']>;
};


export type SanityBlock_RawChildrenArgs = {
  resolveReferences: InputMaybe<SanityResolveReferencesConfiguration>;
};

/** A Sanity document */
export type SanityDocument = {
  _createdAt: Maybe<Scalars['Date']>;
  _id: Maybe<Scalars['String']>;
  _rev: Maybe<Scalars['String']>;
  _type: Maybe<Scalars['String']>;
  _updatedAt: Maybe<Scalars['Date']>;
};

export type SanityFile = {
  __typename?: 'SanityFile';
  _key: Maybe<Scalars['String']>;
  _rawAsset: Maybe<Scalars['JSON']>;
  _type: Maybe<Scalars['String']>;
  asset: Maybe<SanityFileAsset>;
};


export type SanityFile_RawAssetArgs = {
  resolveReferences: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityFileAsset = Node & SanityDocument & {
  __typename?: 'SanityFileAsset';
  _createdAt: Maybe<Scalars['Date']>;
  _id: Maybe<Scalars['String']>;
  _key: Maybe<Scalars['String']>;
  _rawSource: Maybe<Scalars['JSON']>;
  _rev: Maybe<Scalars['String']>;
  _type: Maybe<Scalars['String']>;
  _updatedAt: Maybe<Scalars['Date']>;
  altText: Maybe<Scalars['String']>;
  assetId: Maybe<Scalars['String']>;
  children: Array<Node>;
  description: Maybe<Scalars['String']>;
  extension: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  internal: Internal;
  label: Maybe<Scalars['String']>;
  mimeType: Maybe<Scalars['String']>;
  originalFilename: Maybe<Scalars['String']>;
  parent: Maybe<Node>;
  path: Maybe<Scalars['String']>;
  sha1hash: Maybe<Scalars['String']>;
  size: Maybe<Scalars['Float']>;
  source: Maybe<SanityAssetSourceData>;
  title: Maybe<Scalars['String']>;
  url: Maybe<Scalars['String']>;
};


export type SanityFileAsset_CreatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type SanityFileAsset_RawSourceArgs = {
  resolveReferences: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityFileAsset_UpdatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

export type SanityFileAssetConnection = {
  __typename?: 'SanityFileAssetConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SanityFileAssetEdge>;
  group: Array<SanityFileAssetGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<SanityFileAsset>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SanityFileAssetConnectionDistinctArgs = {
  field: SanityFileAssetFieldsEnum;
};


export type SanityFileAssetConnectionGroupArgs = {
  field: SanityFileAssetFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type SanityFileAssetConnectionMaxArgs = {
  field: SanityFileAssetFieldsEnum;
};


export type SanityFileAssetConnectionMinArgs = {
  field: SanityFileAssetFieldsEnum;
};


export type SanityFileAssetConnectionSumArgs = {
  field: SanityFileAssetFieldsEnum;
};

export type SanityFileAssetEdge = {
  __typename?: 'SanityFileAssetEdge';
  next: Maybe<SanityFileAsset>;
  node: SanityFileAsset;
  previous: Maybe<SanityFileAsset>;
};

export enum SanityFileAssetFieldsEnum {
  _createdAt = '_createdAt',
  _id = '_id',
  _key = '_key',
  _rawSource = '_rawSource',
  _rev = '_rev',
  _type = '_type',
  _updatedAt = '_updatedAt',
  altText = 'altText',
  assetId = 'assetId',
  children = 'children',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  description = 'description',
  extension = 'extension',
  id = 'id',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  label = 'label',
  mimeType = 'mimeType',
  originalFilename = 'originalFilename',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id',
  path = 'path',
  sha1hash = 'sha1hash',
  size = 'size',
  source____key = 'source____key',
  source____type = 'source____type',
  source___id = 'source___id',
  source___name = 'source___name',
  source___url = 'source___url',
  title = 'title',
  url = 'url'
}

export type SanityFileAssetFilterInput = {
  _createdAt: InputMaybe<DateQueryOperatorInput>;
  _id: InputMaybe<StringQueryOperatorInput>;
  _key: InputMaybe<StringQueryOperatorInput>;
  _rawSource: InputMaybe<JsonQueryOperatorInput>;
  _rev: InputMaybe<StringQueryOperatorInput>;
  _type: InputMaybe<StringQueryOperatorInput>;
  _updatedAt: InputMaybe<DateQueryOperatorInput>;
  altText: InputMaybe<StringQueryOperatorInput>;
  assetId: InputMaybe<StringQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  description: InputMaybe<StringQueryOperatorInput>;
  extension: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  label: InputMaybe<StringQueryOperatorInput>;
  mimeType: InputMaybe<StringQueryOperatorInput>;
  originalFilename: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  path: InputMaybe<StringQueryOperatorInput>;
  sha1hash: InputMaybe<StringQueryOperatorInput>;
  size: InputMaybe<FloatQueryOperatorInput>;
  source: InputMaybe<SanityAssetSourceDataFilterInput>;
  title: InputMaybe<StringQueryOperatorInput>;
  url: InputMaybe<StringQueryOperatorInput>;
};

export type SanityFileAssetGroupConnection = {
  __typename?: 'SanityFileAssetGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SanityFileAssetEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<SanityFileAssetGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<SanityFileAsset>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SanityFileAssetGroupConnectionDistinctArgs = {
  field: SanityFileAssetFieldsEnum;
};


export type SanityFileAssetGroupConnectionGroupArgs = {
  field: SanityFileAssetFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type SanityFileAssetGroupConnectionMaxArgs = {
  field: SanityFileAssetFieldsEnum;
};


export type SanityFileAssetGroupConnectionMinArgs = {
  field: SanityFileAssetFieldsEnum;
};


export type SanityFileAssetGroupConnectionSumArgs = {
  field: SanityFileAssetFieldsEnum;
};

export type SanityFileAssetSortInput = {
  fields: InputMaybe<Array<InputMaybe<SanityFileAssetFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export enum SanityGatsbyImagePlaceholder {
  BLURRED = 'BLURRED',
  DOMINANT_COLOR = 'DOMINANT_COLOR',
  NONE = 'NONE'
}

export type SanityGeopoint = {
  __typename?: 'SanityGeopoint';
  _key: Maybe<Scalars['String']>;
  _type: Maybe<Scalars['String']>;
  alt: Maybe<Scalars['Float']>;
  lat: Maybe<Scalars['Float']>;
  lng: Maybe<Scalars['Float']>;
};

export type SanityGeopointFilterInput = {
  _key: InputMaybe<StringQueryOperatorInput>;
  _type: InputMaybe<StringQueryOperatorInput>;
  alt: InputMaybe<FloatQueryOperatorInput>;
  lat: InputMaybe<FloatQueryOperatorInput>;
  lng: InputMaybe<FloatQueryOperatorInput>;
};

export type SanityHome = Node & SanityDocument & {
  __typename?: 'SanityHome';
  _createdAt: Maybe<Scalars['Date']>;
  _id: Maybe<Scalars['String']>;
  _key: Maybe<Scalars['String']>;
  _rawGiftCards: Maybe<Scalars['JSON']>;
  _rawImage: Maybe<Scalars['JSON']>;
  _rawLocations: Maybe<Scalars['JSON']>;
  _rawPayment: Maybe<Scalars['JSON']>;
  _rawServices: Maybe<Scalars['JSON']>;
  _rawTimeline: Maybe<Scalars['JSON']>;
  _rev: Maybe<Scalars['String']>;
  _type: Maybe<Scalars['String']>;
  _updatedAt: Maybe<Scalars['Date']>;
  children: Array<Node>;
  giftCards: Maybe<SanitySection>;
  id: Scalars['ID'];
  image: Maybe<SanityImageWithAlt>;
  internal: Internal;
  locations: Maybe<SanitySection>;
  parent: Maybe<Node>;
  payment: Maybe<SanitySection>;
  services: Maybe<SanitySection>;
  timeline: Maybe<SanitySection>;
};


export type SanityHome_CreatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type SanityHome_RawGiftCardsArgs = {
  resolveReferences: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityHome_RawImageArgs = {
  resolveReferences: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityHome_RawLocationsArgs = {
  resolveReferences: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityHome_RawPaymentArgs = {
  resolveReferences: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityHome_RawServicesArgs = {
  resolveReferences: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityHome_RawTimelineArgs = {
  resolveReferences: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityHome_UpdatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

export type SanityHomeConnection = {
  __typename?: 'SanityHomeConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SanityHomeEdge>;
  group: Array<SanityHomeGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<SanityHome>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SanityHomeConnectionDistinctArgs = {
  field: SanityHomeFieldsEnum;
};


export type SanityHomeConnectionGroupArgs = {
  field: SanityHomeFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type SanityHomeConnectionMaxArgs = {
  field: SanityHomeFieldsEnum;
};


export type SanityHomeConnectionMinArgs = {
  field: SanityHomeFieldsEnum;
};


export type SanityHomeConnectionSumArgs = {
  field: SanityHomeFieldsEnum;
};

export type SanityHomeEdge = {
  __typename?: 'SanityHomeEdge';
  next: Maybe<SanityHome>;
  node: SanityHome;
  previous: Maybe<SanityHome>;
};

export enum SanityHomeFieldsEnum {
  _createdAt = '_createdAt',
  _id = '_id',
  _key = '_key',
  _rawGiftCards = '_rawGiftCards',
  _rawImage = '_rawImage',
  _rawLocations = '_rawLocations',
  _rawPayment = '_rawPayment',
  _rawServices = '_rawServices',
  _rawTimeline = '_rawTimeline',
  _rev = '_rev',
  _type = '_type',
  _updatedAt = '_updatedAt',
  children = 'children',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  giftCards____key = 'giftCards____key',
  giftCards____type = 'giftCards____type',
  giftCards___description = 'giftCards___description',
  giftCards___isHidden = 'giftCards___isHidden',
  giftCards___name = 'giftCards___name',
  giftCards___title = 'giftCards___title',
  id = 'id',
  image____key = 'image____key',
  image____rawImage = 'image____rawImage',
  image____type = 'image____type',
  image___alt = 'image___alt',
  image___image____key = 'image___image____key',
  image___image____rawAsset = 'image___image____rawAsset',
  image___image____rawCrop = 'image___image____rawCrop',
  image___image____rawHotspot = 'image___image____rawHotspot',
  image___image____type = 'image___image____type',
  image___image___asset____createdAt = 'image___image___asset____createdAt',
  image___image___asset____id = 'image___image___asset____id',
  image___image___asset____key = 'image___image___asset____key',
  image___image___asset____rawMetadata = 'image___image___asset____rawMetadata',
  image___image___asset____rawSource = 'image___image___asset____rawSource',
  image___image___asset____rev = 'image___image___asset____rev',
  image___image___asset____type = 'image___image___asset____type',
  image___image___asset____updatedAt = 'image___image___asset____updatedAt',
  image___image___asset___altText = 'image___image___asset___altText',
  image___image___asset___assetId = 'image___image___asset___assetId',
  image___image___asset___children = 'image___image___asset___children',
  image___image___asset___description = 'image___image___asset___description',
  image___image___asset___extension = 'image___image___asset___extension',
  image___image___asset___gatsbyImageData = 'image___image___asset___gatsbyImageData',
  image___image___asset___id = 'image___image___asset___id',
  image___image___asset___label = 'image___image___asset___label',
  image___image___asset___mimeType = 'image___image___asset___mimeType',
  image___image___asset___originalFilename = 'image___image___asset___originalFilename',
  image___image___asset___path = 'image___image___asset___path',
  image___image___asset___sha1hash = 'image___image___asset___sha1hash',
  image___image___asset___size = 'image___image___asset___size',
  image___image___asset___title = 'image___image___asset___title',
  image___image___asset___uploadId = 'image___image___asset___uploadId',
  image___image___asset___url = 'image___image___asset___url',
  image___image___crop____key = 'image___image___crop____key',
  image___image___crop____type = 'image___image___crop____type',
  image___image___crop___bottom = 'image___image___crop___bottom',
  image___image___crop___left = 'image___image___crop___left',
  image___image___crop___right = 'image___image___crop___right',
  image___image___crop___top = 'image___image___crop___top',
  image___image___hotspot____key = 'image___image___hotspot____key',
  image___image___hotspot____type = 'image___image___hotspot____type',
  image___image___hotspot___height = 'image___image___hotspot___height',
  image___image___hotspot___width = 'image___image___hotspot___width',
  image___image___hotspot___x = 'image___image___hotspot___x',
  image___image___hotspot___y = 'image___image___hotspot___y',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  locations____key = 'locations____key',
  locations____type = 'locations____type',
  locations___description = 'locations___description',
  locations___isHidden = 'locations___isHidden',
  locations___name = 'locations___name',
  locations___title = 'locations___title',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id',
  payment____key = 'payment____key',
  payment____type = 'payment____type',
  payment___description = 'payment___description',
  payment___isHidden = 'payment___isHidden',
  payment___name = 'payment___name',
  payment___title = 'payment___title',
  services____key = 'services____key',
  services____type = 'services____type',
  services___description = 'services___description',
  services___isHidden = 'services___isHidden',
  services___name = 'services___name',
  services___title = 'services___title',
  timeline____key = 'timeline____key',
  timeline____type = 'timeline____type',
  timeline___description = 'timeline___description',
  timeline___isHidden = 'timeline___isHidden',
  timeline___name = 'timeline___name',
  timeline___title = 'timeline___title'
}

export type SanityHomeFilterInput = {
  _createdAt: InputMaybe<DateQueryOperatorInput>;
  _id: InputMaybe<StringQueryOperatorInput>;
  _key: InputMaybe<StringQueryOperatorInput>;
  _rawGiftCards: InputMaybe<JsonQueryOperatorInput>;
  _rawImage: InputMaybe<JsonQueryOperatorInput>;
  _rawLocations: InputMaybe<JsonQueryOperatorInput>;
  _rawPayment: InputMaybe<JsonQueryOperatorInput>;
  _rawServices: InputMaybe<JsonQueryOperatorInput>;
  _rawTimeline: InputMaybe<JsonQueryOperatorInput>;
  _rev: InputMaybe<StringQueryOperatorInput>;
  _type: InputMaybe<StringQueryOperatorInput>;
  _updatedAt: InputMaybe<DateQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  giftCards: InputMaybe<SanitySectionFilterInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  image: InputMaybe<SanityImageWithAltFilterInput>;
  internal: InputMaybe<InternalFilterInput>;
  locations: InputMaybe<SanitySectionFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  payment: InputMaybe<SanitySectionFilterInput>;
  services: InputMaybe<SanitySectionFilterInput>;
  timeline: InputMaybe<SanitySectionFilterInput>;
};

export type SanityHomeGroupConnection = {
  __typename?: 'SanityHomeGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SanityHomeEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<SanityHomeGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<SanityHome>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SanityHomeGroupConnectionDistinctArgs = {
  field: SanityHomeFieldsEnum;
};


export type SanityHomeGroupConnectionGroupArgs = {
  field: SanityHomeFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type SanityHomeGroupConnectionMaxArgs = {
  field: SanityHomeFieldsEnum;
};


export type SanityHomeGroupConnectionMinArgs = {
  field: SanityHomeFieldsEnum;
};


export type SanityHomeGroupConnectionSumArgs = {
  field: SanityHomeFieldsEnum;
};

export type SanityHomeSortInput = {
  fields: InputMaybe<Array<InputMaybe<SanityHomeFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SanityImage = {
  __typename?: 'SanityImage';
  _key: Maybe<Scalars['String']>;
  _rawAsset: Maybe<Scalars['JSON']>;
  _rawCrop: Maybe<Scalars['JSON']>;
  _rawHotspot: Maybe<Scalars['JSON']>;
  _type: Maybe<Scalars['String']>;
  asset: Maybe<SanityImageAsset>;
  crop: Maybe<SanityImageCrop>;
  hotspot: Maybe<SanityImageHotspot>;
};


export type SanityImage_RawAssetArgs = {
  resolveReferences: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityImage_RawCropArgs = {
  resolveReferences: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityImage_RawHotspotArgs = {
  resolveReferences: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityImageAsset = Node & SanityDocument & {
  __typename?: 'SanityImageAsset';
  _createdAt: Maybe<Scalars['Date']>;
  _id: Maybe<Scalars['String']>;
  _key: Maybe<Scalars['String']>;
  _rawMetadata: Maybe<Scalars['JSON']>;
  _rawSource: Maybe<Scalars['JSON']>;
  _rev: Maybe<Scalars['String']>;
  _type: Maybe<Scalars['String']>;
  _updatedAt: Maybe<Scalars['Date']>;
  altText: Maybe<Scalars['String']>;
  assetId: Maybe<Scalars['String']>;
  children: Array<Node>;
  description: Maybe<Scalars['String']>;
  extension: Maybe<Scalars['String']>;
  gatsbyImageData: Scalars['JSON'];
  id: Scalars['ID'];
  internal: Internal;
  label: Maybe<Scalars['String']>;
  metadata: Maybe<SanityImageMetadata>;
  mimeType: Maybe<Scalars['String']>;
  originalFilename: Maybe<Scalars['String']>;
  parent: Maybe<Node>;
  path: Maybe<Scalars['String']>;
  sha1hash: Maybe<Scalars['String']>;
  size: Maybe<Scalars['Float']>;
  source: Maybe<SanityAssetSourceData>;
  title: Maybe<Scalars['String']>;
  uploadId: Maybe<Scalars['String']>;
  url: Maybe<Scalars['String']>;
};


export type SanityImageAsset_CreatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type SanityImageAsset_RawMetadataArgs = {
  resolveReferences: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityImageAsset_RawSourceArgs = {
  resolveReferences: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityImageAsset_UpdatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type SanityImageAssetGatsbyImageDataArgs = {
  aspectRatio: InputMaybe<Scalars['Float']>;
  backgroundColor: InputMaybe<Scalars['String']>;
  breakpoints: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  fit?: InputMaybe<SanityImageFit>;
  formats?: InputMaybe<Array<InputMaybe<GatsbyImageFormat>>>;
  height: InputMaybe<Scalars['Int']>;
  layout: InputMaybe<GatsbyImageLayout>;
  outputPixelDensities: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  placeholder?: InputMaybe<SanityGatsbyImagePlaceholder>;
  sizes: InputMaybe<Scalars['String']>;
  width: InputMaybe<Scalars['Int']>;
};

export type SanityImageAssetConnection = {
  __typename?: 'SanityImageAssetConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SanityImageAssetEdge>;
  group: Array<SanityImageAssetGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<SanityImageAsset>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SanityImageAssetConnectionDistinctArgs = {
  field: SanityImageAssetFieldsEnum;
};


export type SanityImageAssetConnectionGroupArgs = {
  field: SanityImageAssetFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type SanityImageAssetConnectionMaxArgs = {
  field: SanityImageAssetFieldsEnum;
};


export type SanityImageAssetConnectionMinArgs = {
  field: SanityImageAssetFieldsEnum;
};


export type SanityImageAssetConnectionSumArgs = {
  field: SanityImageAssetFieldsEnum;
};

export type SanityImageAssetEdge = {
  __typename?: 'SanityImageAssetEdge';
  next: Maybe<SanityImageAsset>;
  node: SanityImageAsset;
  previous: Maybe<SanityImageAsset>;
};

export enum SanityImageAssetFieldsEnum {
  _createdAt = '_createdAt',
  _id = '_id',
  _key = '_key',
  _rawMetadata = '_rawMetadata',
  _rawSource = '_rawSource',
  _rev = '_rev',
  _type = '_type',
  _updatedAt = '_updatedAt',
  altText = 'altText',
  assetId = 'assetId',
  children = 'children',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  description = 'description',
  extension = 'extension',
  gatsbyImageData = 'gatsbyImageData',
  id = 'id',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  label = 'label',
  metadata____key = 'metadata____key',
  metadata____rawDimensions = 'metadata____rawDimensions',
  metadata____rawLocation = 'metadata____rawLocation',
  metadata____rawPalette = 'metadata____rawPalette',
  metadata____type = 'metadata____type',
  metadata___blurHash = 'metadata___blurHash',
  metadata___dimensions____key = 'metadata___dimensions____key',
  metadata___dimensions____type = 'metadata___dimensions____type',
  metadata___dimensions___aspectRatio = 'metadata___dimensions___aspectRatio',
  metadata___dimensions___height = 'metadata___dimensions___height',
  metadata___dimensions___width = 'metadata___dimensions___width',
  metadata___hasAlpha = 'metadata___hasAlpha',
  metadata___isOpaque = 'metadata___isOpaque',
  metadata___location____key = 'metadata___location____key',
  metadata___location____type = 'metadata___location____type',
  metadata___location___alt = 'metadata___location___alt',
  metadata___location___lat = 'metadata___location___lat',
  metadata___location___lng = 'metadata___location___lng',
  metadata___lqip = 'metadata___lqip',
  metadata___palette____key = 'metadata___palette____key',
  metadata___palette____rawDarkMuted = 'metadata___palette____rawDarkMuted',
  metadata___palette____rawDarkVibrant = 'metadata___palette____rawDarkVibrant',
  metadata___palette____rawDominant = 'metadata___palette____rawDominant',
  metadata___palette____rawLightMuted = 'metadata___palette____rawLightMuted',
  metadata___palette____rawLightVibrant = 'metadata___palette____rawLightVibrant',
  metadata___palette____rawMuted = 'metadata___palette____rawMuted',
  metadata___palette____rawVibrant = 'metadata___palette____rawVibrant',
  metadata___palette____type = 'metadata___palette____type',
  metadata___palette___darkMuted____key = 'metadata___palette___darkMuted____key',
  metadata___palette___darkMuted____type = 'metadata___palette___darkMuted____type',
  metadata___palette___darkMuted___background = 'metadata___palette___darkMuted___background',
  metadata___palette___darkMuted___foreground = 'metadata___palette___darkMuted___foreground',
  metadata___palette___darkMuted___population = 'metadata___palette___darkMuted___population',
  metadata___palette___darkMuted___title = 'metadata___palette___darkMuted___title',
  metadata___palette___darkVibrant____key = 'metadata___palette___darkVibrant____key',
  metadata___palette___darkVibrant____type = 'metadata___palette___darkVibrant____type',
  metadata___palette___darkVibrant___background = 'metadata___palette___darkVibrant___background',
  metadata___palette___darkVibrant___foreground = 'metadata___palette___darkVibrant___foreground',
  metadata___palette___darkVibrant___population = 'metadata___palette___darkVibrant___population',
  metadata___palette___darkVibrant___title = 'metadata___palette___darkVibrant___title',
  metadata___palette___dominant____key = 'metadata___palette___dominant____key',
  metadata___palette___dominant____type = 'metadata___palette___dominant____type',
  metadata___palette___dominant___background = 'metadata___palette___dominant___background',
  metadata___palette___dominant___foreground = 'metadata___palette___dominant___foreground',
  metadata___palette___dominant___population = 'metadata___palette___dominant___population',
  metadata___palette___dominant___title = 'metadata___palette___dominant___title',
  metadata___palette___lightMuted____key = 'metadata___palette___lightMuted____key',
  metadata___palette___lightMuted____type = 'metadata___palette___lightMuted____type',
  metadata___palette___lightMuted___background = 'metadata___palette___lightMuted___background',
  metadata___palette___lightMuted___foreground = 'metadata___palette___lightMuted___foreground',
  metadata___palette___lightMuted___population = 'metadata___palette___lightMuted___population',
  metadata___palette___lightMuted___title = 'metadata___palette___lightMuted___title',
  metadata___palette___lightVibrant____key = 'metadata___palette___lightVibrant____key',
  metadata___palette___lightVibrant____type = 'metadata___palette___lightVibrant____type',
  metadata___palette___lightVibrant___background = 'metadata___palette___lightVibrant___background',
  metadata___palette___lightVibrant___foreground = 'metadata___palette___lightVibrant___foreground',
  metadata___palette___lightVibrant___population = 'metadata___palette___lightVibrant___population',
  metadata___palette___lightVibrant___title = 'metadata___palette___lightVibrant___title',
  metadata___palette___muted____key = 'metadata___palette___muted____key',
  metadata___palette___muted____type = 'metadata___palette___muted____type',
  metadata___palette___muted___background = 'metadata___palette___muted___background',
  metadata___palette___muted___foreground = 'metadata___palette___muted___foreground',
  metadata___palette___muted___population = 'metadata___palette___muted___population',
  metadata___palette___muted___title = 'metadata___palette___muted___title',
  metadata___palette___vibrant____key = 'metadata___palette___vibrant____key',
  metadata___palette___vibrant____type = 'metadata___palette___vibrant____type',
  metadata___palette___vibrant___background = 'metadata___palette___vibrant___background',
  metadata___palette___vibrant___foreground = 'metadata___palette___vibrant___foreground',
  metadata___palette___vibrant___population = 'metadata___palette___vibrant___population',
  metadata___palette___vibrant___title = 'metadata___palette___vibrant___title',
  mimeType = 'mimeType',
  originalFilename = 'originalFilename',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id',
  path = 'path',
  sha1hash = 'sha1hash',
  size = 'size',
  source____key = 'source____key',
  source____type = 'source____type',
  source___id = 'source___id',
  source___name = 'source___name',
  source___url = 'source___url',
  title = 'title',
  uploadId = 'uploadId',
  url = 'url'
}

export type SanityImageAssetFilterInput = {
  _createdAt: InputMaybe<DateQueryOperatorInput>;
  _id: InputMaybe<StringQueryOperatorInput>;
  _key: InputMaybe<StringQueryOperatorInput>;
  _rawMetadata: InputMaybe<JsonQueryOperatorInput>;
  _rawSource: InputMaybe<JsonQueryOperatorInput>;
  _rev: InputMaybe<StringQueryOperatorInput>;
  _type: InputMaybe<StringQueryOperatorInput>;
  _updatedAt: InputMaybe<DateQueryOperatorInput>;
  altText: InputMaybe<StringQueryOperatorInput>;
  assetId: InputMaybe<StringQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  description: InputMaybe<StringQueryOperatorInput>;
  extension: InputMaybe<StringQueryOperatorInput>;
  gatsbyImageData: InputMaybe<JsonQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  label: InputMaybe<StringQueryOperatorInput>;
  metadata: InputMaybe<SanityImageMetadataFilterInput>;
  mimeType: InputMaybe<StringQueryOperatorInput>;
  originalFilename: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  path: InputMaybe<StringQueryOperatorInput>;
  sha1hash: InputMaybe<StringQueryOperatorInput>;
  size: InputMaybe<FloatQueryOperatorInput>;
  source: InputMaybe<SanityAssetSourceDataFilterInput>;
  title: InputMaybe<StringQueryOperatorInput>;
  uploadId: InputMaybe<StringQueryOperatorInput>;
  url: InputMaybe<StringQueryOperatorInput>;
};

export type SanityImageAssetGroupConnection = {
  __typename?: 'SanityImageAssetGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SanityImageAssetEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<SanityImageAssetGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<SanityImageAsset>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SanityImageAssetGroupConnectionDistinctArgs = {
  field: SanityImageAssetFieldsEnum;
};


export type SanityImageAssetGroupConnectionGroupArgs = {
  field: SanityImageAssetFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type SanityImageAssetGroupConnectionMaxArgs = {
  field: SanityImageAssetFieldsEnum;
};


export type SanityImageAssetGroupConnectionMinArgs = {
  field: SanityImageAssetFieldsEnum;
};


export type SanityImageAssetGroupConnectionSumArgs = {
  field: SanityImageAssetFieldsEnum;
};

export type SanityImageAssetSortInput = {
  fields: InputMaybe<Array<InputMaybe<SanityImageAssetFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SanityImageCrop = {
  __typename?: 'SanityImageCrop';
  _key: Maybe<Scalars['String']>;
  _type: Maybe<Scalars['String']>;
  bottom: Maybe<Scalars['Float']>;
  left: Maybe<Scalars['Float']>;
  right: Maybe<Scalars['Float']>;
  top: Maybe<Scalars['Float']>;
};

export type SanityImageCropFilterInput = {
  _key: InputMaybe<StringQueryOperatorInput>;
  _type: InputMaybe<StringQueryOperatorInput>;
  bottom: InputMaybe<FloatQueryOperatorInput>;
  left: InputMaybe<FloatQueryOperatorInput>;
  right: InputMaybe<FloatQueryOperatorInput>;
  top: InputMaybe<FloatQueryOperatorInput>;
};

export type SanityImageDimensions = {
  __typename?: 'SanityImageDimensions';
  _key: Maybe<Scalars['String']>;
  _type: Maybe<Scalars['String']>;
  aspectRatio: Maybe<Scalars['Float']>;
  height: Maybe<Scalars['Float']>;
  width: Maybe<Scalars['Float']>;
};

export type SanityImageDimensionsFilterInput = {
  _key: InputMaybe<StringQueryOperatorInput>;
  _type: InputMaybe<StringQueryOperatorInput>;
  aspectRatio: InputMaybe<FloatQueryOperatorInput>;
  height: InputMaybe<FloatQueryOperatorInput>;
  width: InputMaybe<FloatQueryOperatorInput>;
};

export type SanityImageFilterInput = {
  _key: InputMaybe<StringQueryOperatorInput>;
  _rawAsset: InputMaybe<JsonQueryOperatorInput>;
  _rawCrop: InputMaybe<JsonQueryOperatorInput>;
  _rawHotspot: InputMaybe<JsonQueryOperatorInput>;
  _type: InputMaybe<StringQueryOperatorInput>;
  asset: InputMaybe<SanityImageAssetFilterInput>;
  crop: InputMaybe<SanityImageCropFilterInput>;
  hotspot: InputMaybe<SanityImageHotspotFilterInput>;
};

export enum SanityImageFit {
  CLIP = 'CLIP',
  CROP = 'CROP',
  FILL = 'FILL',
  FILLMAX = 'FILLMAX',
  MAX = 'MAX',
  MIN = 'MIN',
  SCALE = 'SCALE'
}

export type SanityImageHotspot = {
  __typename?: 'SanityImageHotspot';
  _key: Maybe<Scalars['String']>;
  _type: Maybe<Scalars['String']>;
  height: Maybe<Scalars['Float']>;
  width: Maybe<Scalars['Float']>;
  x: Maybe<Scalars['Float']>;
  y: Maybe<Scalars['Float']>;
};

export type SanityImageHotspotFilterInput = {
  _key: InputMaybe<StringQueryOperatorInput>;
  _type: InputMaybe<StringQueryOperatorInput>;
  height: InputMaybe<FloatQueryOperatorInput>;
  width: InputMaybe<FloatQueryOperatorInput>;
  x: InputMaybe<FloatQueryOperatorInput>;
  y: InputMaybe<FloatQueryOperatorInput>;
};

export type SanityImageMetadata = {
  __typename?: 'SanityImageMetadata';
  _key: Maybe<Scalars['String']>;
  _rawDimensions: Maybe<Scalars['JSON']>;
  _rawLocation: Maybe<Scalars['JSON']>;
  _rawPalette: Maybe<Scalars['JSON']>;
  _type: Maybe<Scalars['String']>;
  blurHash: Maybe<Scalars['String']>;
  dimensions: Maybe<SanityImageDimensions>;
  hasAlpha: Maybe<Scalars['Boolean']>;
  isOpaque: Maybe<Scalars['Boolean']>;
  location: Maybe<SanityGeopoint>;
  lqip: Maybe<Scalars['String']>;
  palette: Maybe<SanityImagePalette>;
};


export type SanityImageMetadata_RawDimensionsArgs = {
  resolveReferences: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityImageMetadata_RawLocationArgs = {
  resolveReferences: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityImageMetadata_RawPaletteArgs = {
  resolveReferences: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityImageMetadataFilterInput = {
  _key: InputMaybe<StringQueryOperatorInput>;
  _rawDimensions: InputMaybe<JsonQueryOperatorInput>;
  _rawLocation: InputMaybe<JsonQueryOperatorInput>;
  _rawPalette: InputMaybe<JsonQueryOperatorInput>;
  _type: InputMaybe<StringQueryOperatorInput>;
  blurHash: InputMaybe<StringQueryOperatorInput>;
  dimensions: InputMaybe<SanityImageDimensionsFilterInput>;
  hasAlpha: InputMaybe<BooleanQueryOperatorInput>;
  isOpaque: InputMaybe<BooleanQueryOperatorInput>;
  location: InputMaybe<SanityGeopointFilterInput>;
  lqip: InputMaybe<StringQueryOperatorInput>;
  palette: InputMaybe<SanityImagePaletteFilterInput>;
};

export type SanityImagePalette = {
  __typename?: 'SanityImagePalette';
  _key: Maybe<Scalars['String']>;
  _rawDarkMuted: Maybe<Scalars['JSON']>;
  _rawDarkVibrant: Maybe<Scalars['JSON']>;
  _rawDominant: Maybe<Scalars['JSON']>;
  _rawLightMuted: Maybe<Scalars['JSON']>;
  _rawLightVibrant: Maybe<Scalars['JSON']>;
  _rawMuted: Maybe<Scalars['JSON']>;
  _rawVibrant: Maybe<Scalars['JSON']>;
  _type: Maybe<Scalars['String']>;
  darkMuted: Maybe<SanityImagePaletteSwatch>;
  darkVibrant: Maybe<SanityImagePaletteSwatch>;
  dominant: Maybe<SanityImagePaletteSwatch>;
  lightMuted: Maybe<SanityImagePaletteSwatch>;
  lightVibrant: Maybe<SanityImagePaletteSwatch>;
  muted: Maybe<SanityImagePaletteSwatch>;
  vibrant: Maybe<SanityImagePaletteSwatch>;
};


export type SanityImagePalette_RawDarkMutedArgs = {
  resolveReferences: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityImagePalette_RawDarkVibrantArgs = {
  resolveReferences: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityImagePalette_RawDominantArgs = {
  resolveReferences: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityImagePalette_RawLightMutedArgs = {
  resolveReferences: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityImagePalette_RawLightVibrantArgs = {
  resolveReferences: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityImagePalette_RawMutedArgs = {
  resolveReferences: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityImagePalette_RawVibrantArgs = {
  resolveReferences: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityImagePaletteFilterInput = {
  _key: InputMaybe<StringQueryOperatorInput>;
  _rawDarkMuted: InputMaybe<JsonQueryOperatorInput>;
  _rawDarkVibrant: InputMaybe<JsonQueryOperatorInput>;
  _rawDominant: InputMaybe<JsonQueryOperatorInput>;
  _rawLightMuted: InputMaybe<JsonQueryOperatorInput>;
  _rawLightVibrant: InputMaybe<JsonQueryOperatorInput>;
  _rawMuted: InputMaybe<JsonQueryOperatorInput>;
  _rawVibrant: InputMaybe<JsonQueryOperatorInput>;
  _type: InputMaybe<StringQueryOperatorInput>;
  darkMuted: InputMaybe<SanityImagePaletteSwatchFilterInput>;
  darkVibrant: InputMaybe<SanityImagePaletteSwatchFilterInput>;
  dominant: InputMaybe<SanityImagePaletteSwatchFilterInput>;
  lightMuted: InputMaybe<SanityImagePaletteSwatchFilterInput>;
  lightVibrant: InputMaybe<SanityImagePaletteSwatchFilterInput>;
  muted: InputMaybe<SanityImagePaletteSwatchFilterInput>;
  vibrant: InputMaybe<SanityImagePaletteSwatchFilterInput>;
};

export type SanityImagePaletteSwatch = {
  __typename?: 'SanityImagePaletteSwatch';
  _key: Maybe<Scalars['String']>;
  _type: Maybe<Scalars['String']>;
  background: Maybe<Scalars['String']>;
  foreground: Maybe<Scalars['String']>;
  population: Maybe<Scalars['Float']>;
  title: Maybe<Scalars['String']>;
};

export type SanityImagePaletteSwatchFilterInput = {
  _key: InputMaybe<StringQueryOperatorInput>;
  _type: InputMaybe<StringQueryOperatorInput>;
  background: InputMaybe<StringQueryOperatorInput>;
  foreground: InputMaybe<StringQueryOperatorInput>;
  population: InputMaybe<FloatQueryOperatorInput>;
  title: InputMaybe<StringQueryOperatorInput>;
};

export type SanityImageWithAlt = {
  __typename?: 'SanityImageWithAlt';
  _key: Maybe<Scalars['String']>;
  _rawImage: Maybe<Scalars['JSON']>;
  _type: Maybe<Scalars['String']>;
  alt: Maybe<Scalars['String']>;
  image: Maybe<SanityImage>;
};


export type SanityImageWithAlt_RawImageArgs = {
  resolveReferences: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityImageWithAltFilterInput = {
  _key: InputMaybe<StringQueryOperatorInput>;
  _rawImage: InputMaybe<JsonQueryOperatorInput>;
  _type: InputMaybe<StringQueryOperatorInput>;
  alt: InputMaybe<StringQueryOperatorInput>;
  image: InputMaybe<SanityImageFilterInput>;
};

export type SanityImageWithAltFilterListInput = {
  elemMatch: InputMaybe<SanityImageWithAltFilterInput>;
};

export type SanityInfo = Node & SanityDocument & {
  __typename?: 'SanityInfo';
  _createdAt: Maybe<Scalars['Date']>;
  _id: Maybe<Scalars['String']>;
  _key: Maybe<Scalars['String']>;
  _rawLogo: Maybe<Scalars['JSON']>;
  _rawLogoSmall: Maybe<Scalars['JSON']>;
  _rev: Maybe<Scalars['String']>;
  _type: Maybe<Scalars['String']>;
  _updatedAt: Maybe<Scalars['Date']>;
  address: Maybe<Scalars['String']>;
  children: Array<Node>;
  email: Maybe<Scalars['String']>;
  erecieptLink: Maybe<Scalars['String']>;
  facebookLink: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  instagramLink: Maybe<Scalars['String']>;
  internal: Internal;
  logo: Maybe<SanityImageWithAlt>;
  logoSmall: Maybe<SanityImageWithAlt>;
  parent: Maybe<Node>;
  phoneNumber: Maybe<Scalars['String']>;
};


export type SanityInfo_CreatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type SanityInfo_RawLogoArgs = {
  resolveReferences: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityInfo_RawLogoSmallArgs = {
  resolveReferences: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityInfo_UpdatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

export type SanityInfoConnection = {
  __typename?: 'SanityInfoConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SanityInfoEdge>;
  group: Array<SanityInfoGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<SanityInfo>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SanityInfoConnectionDistinctArgs = {
  field: SanityInfoFieldsEnum;
};


export type SanityInfoConnectionGroupArgs = {
  field: SanityInfoFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type SanityInfoConnectionMaxArgs = {
  field: SanityInfoFieldsEnum;
};


export type SanityInfoConnectionMinArgs = {
  field: SanityInfoFieldsEnum;
};


export type SanityInfoConnectionSumArgs = {
  field: SanityInfoFieldsEnum;
};

export type SanityInfoEdge = {
  __typename?: 'SanityInfoEdge';
  next: Maybe<SanityInfo>;
  node: SanityInfo;
  previous: Maybe<SanityInfo>;
};

export enum SanityInfoFieldsEnum {
  _createdAt = '_createdAt',
  _id = '_id',
  _key = '_key',
  _rawLogo = '_rawLogo',
  _rawLogoSmall = '_rawLogoSmall',
  _rev = '_rev',
  _type = '_type',
  _updatedAt = '_updatedAt',
  address = 'address',
  children = 'children',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  email = 'email',
  erecieptLink = 'erecieptLink',
  facebookLink = 'facebookLink',
  id = 'id',
  instagramLink = 'instagramLink',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  logoSmall____key = 'logoSmall____key',
  logoSmall____rawImage = 'logoSmall____rawImage',
  logoSmall____type = 'logoSmall____type',
  logoSmall___alt = 'logoSmall___alt',
  logoSmall___image____key = 'logoSmall___image____key',
  logoSmall___image____rawAsset = 'logoSmall___image____rawAsset',
  logoSmall___image____rawCrop = 'logoSmall___image____rawCrop',
  logoSmall___image____rawHotspot = 'logoSmall___image____rawHotspot',
  logoSmall___image____type = 'logoSmall___image____type',
  logoSmall___image___asset____createdAt = 'logoSmall___image___asset____createdAt',
  logoSmall___image___asset____id = 'logoSmall___image___asset____id',
  logoSmall___image___asset____key = 'logoSmall___image___asset____key',
  logoSmall___image___asset____rawMetadata = 'logoSmall___image___asset____rawMetadata',
  logoSmall___image___asset____rawSource = 'logoSmall___image___asset____rawSource',
  logoSmall___image___asset____rev = 'logoSmall___image___asset____rev',
  logoSmall___image___asset____type = 'logoSmall___image___asset____type',
  logoSmall___image___asset____updatedAt = 'logoSmall___image___asset____updatedAt',
  logoSmall___image___asset___altText = 'logoSmall___image___asset___altText',
  logoSmall___image___asset___assetId = 'logoSmall___image___asset___assetId',
  logoSmall___image___asset___children = 'logoSmall___image___asset___children',
  logoSmall___image___asset___description = 'logoSmall___image___asset___description',
  logoSmall___image___asset___extension = 'logoSmall___image___asset___extension',
  logoSmall___image___asset___gatsbyImageData = 'logoSmall___image___asset___gatsbyImageData',
  logoSmall___image___asset___id = 'logoSmall___image___asset___id',
  logoSmall___image___asset___label = 'logoSmall___image___asset___label',
  logoSmall___image___asset___mimeType = 'logoSmall___image___asset___mimeType',
  logoSmall___image___asset___originalFilename = 'logoSmall___image___asset___originalFilename',
  logoSmall___image___asset___path = 'logoSmall___image___asset___path',
  logoSmall___image___asset___sha1hash = 'logoSmall___image___asset___sha1hash',
  logoSmall___image___asset___size = 'logoSmall___image___asset___size',
  logoSmall___image___asset___title = 'logoSmall___image___asset___title',
  logoSmall___image___asset___uploadId = 'logoSmall___image___asset___uploadId',
  logoSmall___image___asset___url = 'logoSmall___image___asset___url',
  logoSmall___image___crop____key = 'logoSmall___image___crop____key',
  logoSmall___image___crop____type = 'logoSmall___image___crop____type',
  logoSmall___image___crop___bottom = 'logoSmall___image___crop___bottom',
  logoSmall___image___crop___left = 'logoSmall___image___crop___left',
  logoSmall___image___crop___right = 'logoSmall___image___crop___right',
  logoSmall___image___crop___top = 'logoSmall___image___crop___top',
  logoSmall___image___hotspot____key = 'logoSmall___image___hotspot____key',
  logoSmall___image___hotspot____type = 'logoSmall___image___hotspot____type',
  logoSmall___image___hotspot___height = 'logoSmall___image___hotspot___height',
  logoSmall___image___hotspot___width = 'logoSmall___image___hotspot___width',
  logoSmall___image___hotspot___x = 'logoSmall___image___hotspot___x',
  logoSmall___image___hotspot___y = 'logoSmall___image___hotspot___y',
  logo____key = 'logo____key',
  logo____rawImage = 'logo____rawImage',
  logo____type = 'logo____type',
  logo___alt = 'logo___alt',
  logo___image____key = 'logo___image____key',
  logo___image____rawAsset = 'logo___image____rawAsset',
  logo___image____rawCrop = 'logo___image____rawCrop',
  logo___image____rawHotspot = 'logo___image____rawHotspot',
  logo___image____type = 'logo___image____type',
  logo___image___asset____createdAt = 'logo___image___asset____createdAt',
  logo___image___asset____id = 'logo___image___asset____id',
  logo___image___asset____key = 'logo___image___asset____key',
  logo___image___asset____rawMetadata = 'logo___image___asset____rawMetadata',
  logo___image___asset____rawSource = 'logo___image___asset____rawSource',
  logo___image___asset____rev = 'logo___image___asset____rev',
  logo___image___asset____type = 'logo___image___asset____type',
  logo___image___asset____updatedAt = 'logo___image___asset____updatedAt',
  logo___image___asset___altText = 'logo___image___asset___altText',
  logo___image___asset___assetId = 'logo___image___asset___assetId',
  logo___image___asset___children = 'logo___image___asset___children',
  logo___image___asset___description = 'logo___image___asset___description',
  logo___image___asset___extension = 'logo___image___asset___extension',
  logo___image___asset___gatsbyImageData = 'logo___image___asset___gatsbyImageData',
  logo___image___asset___id = 'logo___image___asset___id',
  logo___image___asset___label = 'logo___image___asset___label',
  logo___image___asset___mimeType = 'logo___image___asset___mimeType',
  logo___image___asset___originalFilename = 'logo___image___asset___originalFilename',
  logo___image___asset___path = 'logo___image___asset___path',
  logo___image___asset___sha1hash = 'logo___image___asset___sha1hash',
  logo___image___asset___size = 'logo___image___asset___size',
  logo___image___asset___title = 'logo___image___asset___title',
  logo___image___asset___uploadId = 'logo___image___asset___uploadId',
  logo___image___asset___url = 'logo___image___asset___url',
  logo___image___crop____key = 'logo___image___crop____key',
  logo___image___crop____type = 'logo___image___crop____type',
  logo___image___crop___bottom = 'logo___image___crop___bottom',
  logo___image___crop___left = 'logo___image___crop___left',
  logo___image___crop___right = 'logo___image___crop___right',
  logo___image___crop___top = 'logo___image___crop___top',
  logo___image___hotspot____key = 'logo___image___hotspot____key',
  logo___image___hotspot____type = 'logo___image___hotspot____type',
  logo___image___hotspot___height = 'logo___image___hotspot___height',
  logo___image___hotspot___width = 'logo___image___hotspot___width',
  logo___image___hotspot___x = 'logo___image___hotspot___x',
  logo___image___hotspot___y = 'logo___image___hotspot___y',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id',
  phoneNumber = 'phoneNumber'
}

export type SanityInfoFilterInput = {
  _createdAt: InputMaybe<DateQueryOperatorInput>;
  _id: InputMaybe<StringQueryOperatorInput>;
  _key: InputMaybe<StringQueryOperatorInput>;
  _rawLogo: InputMaybe<JsonQueryOperatorInput>;
  _rawLogoSmall: InputMaybe<JsonQueryOperatorInput>;
  _rev: InputMaybe<StringQueryOperatorInput>;
  _type: InputMaybe<StringQueryOperatorInput>;
  _updatedAt: InputMaybe<DateQueryOperatorInput>;
  address: InputMaybe<StringQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  email: InputMaybe<StringQueryOperatorInput>;
  erecieptLink: InputMaybe<StringQueryOperatorInput>;
  facebookLink: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  instagramLink: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  logo: InputMaybe<SanityImageWithAltFilterInput>;
  logoSmall: InputMaybe<SanityImageWithAltFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  phoneNumber: InputMaybe<StringQueryOperatorInput>;
};

export type SanityInfoGroupConnection = {
  __typename?: 'SanityInfoGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SanityInfoEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<SanityInfoGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<SanityInfo>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SanityInfoGroupConnectionDistinctArgs = {
  field: SanityInfoFieldsEnum;
};


export type SanityInfoGroupConnectionGroupArgs = {
  field: SanityInfoFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type SanityInfoGroupConnectionMaxArgs = {
  field: SanityInfoFieldsEnum;
};


export type SanityInfoGroupConnectionMinArgs = {
  field: SanityInfoFieldsEnum;
};


export type SanityInfoGroupConnectionSumArgs = {
  field: SanityInfoFieldsEnum;
};

export type SanityInfoSortInput = {
  fields: InputMaybe<Array<InputMaybe<SanityInfoFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SanityLocation = Node & SanityDocument & {
  __typename?: 'SanityLocation';
  _createdAt: Maybe<Scalars['Date']>;
  _id: Maybe<Scalars['String']>;
  _key: Maybe<Scalars['String']>;
  _rawImages: Maybe<Scalars['JSON']>;
  _rawLocation: Maybe<Scalars['JSON']>;
  _rawServices: Maybe<Scalars['JSON']>;
  _rawSlug: Maybe<Scalars['JSON']>;
  _rev: Maybe<Scalars['String']>;
  _type: Maybe<Scalars['String']>;
  _updatedAt: Maybe<Scalars['Date']>;
  address: Maybe<Scalars['String']>;
  children: Array<Node>;
  id: Scalars['ID'];
  images: Maybe<Array<Maybe<SanityImageWithAlt>>>;
  internal: Internal;
  location: Maybe<SanityGeopoint>;
  metaDescription: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  parent: Maybe<Node>;
  services: Maybe<Array<Maybe<SanityAvailableService>>>;
  slug: Maybe<SanitySlug>;
};


export type SanityLocation_CreatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type SanityLocation_RawImagesArgs = {
  resolveReferences: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityLocation_RawLocationArgs = {
  resolveReferences: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityLocation_RawServicesArgs = {
  resolveReferences: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityLocation_RawSlugArgs = {
  resolveReferences: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityLocation_UpdatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

export type SanityLocationConnection = {
  __typename?: 'SanityLocationConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SanityLocationEdge>;
  group: Array<SanityLocationGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<SanityLocation>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SanityLocationConnectionDistinctArgs = {
  field: SanityLocationFieldsEnum;
};


export type SanityLocationConnectionGroupArgs = {
  field: SanityLocationFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type SanityLocationConnectionMaxArgs = {
  field: SanityLocationFieldsEnum;
};


export type SanityLocationConnectionMinArgs = {
  field: SanityLocationFieldsEnum;
};


export type SanityLocationConnectionSumArgs = {
  field: SanityLocationFieldsEnum;
};

export type SanityLocationEdge = {
  __typename?: 'SanityLocationEdge';
  next: Maybe<SanityLocation>;
  node: SanityLocation;
  previous: Maybe<SanityLocation>;
};

export enum SanityLocationFieldsEnum {
  _createdAt = '_createdAt',
  _id = '_id',
  _key = '_key',
  _rawImages = '_rawImages',
  _rawLocation = '_rawLocation',
  _rawServices = '_rawServices',
  _rawSlug = '_rawSlug',
  _rev = '_rev',
  _type = '_type',
  _updatedAt = '_updatedAt',
  address = 'address',
  children = 'children',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  id = 'id',
  images = 'images',
  images____key = 'images____key',
  images____rawImage = 'images____rawImage',
  images____type = 'images____type',
  images___alt = 'images___alt',
  images___image____key = 'images___image____key',
  images___image____rawAsset = 'images___image____rawAsset',
  images___image____rawCrop = 'images___image____rawCrop',
  images___image____rawHotspot = 'images___image____rawHotspot',
  images___image____type = 'images___image____type',
  images___image___asset____createdAt = 'images___image___asset____createdAt',
  images___image___asset____id = 'images___image___asset____id',
  images___image___asset____key = 'images___image___asset____key',
  images___image___asset____rawMetadata = 'images___image___asset____rawMetadata',
  images___image___asset____rawSource = 'images___image___asset____rawSource',
  images___image___asset____rev = 'images___image___asset____rev',
  images___image___asset____type = 'images___image___asset____type',
  images___image___asset____updatedAt = 'images___image___asset____updatedAt',
  images___image___asset___altText = 'images___image___asset___altText',
  images___image___asset___assetId = 'images___image___asset___assetId',
  images___image___asset___children = 'images___image___asset___children',
  images___image___asset___description = 'images___image___asset___description',
  images___image___asset___extension = 'images___image___asset___extension',
  images___image___asset___gatsbyImageData = 'images___image___asset___gatsbyImageData',
  images___image___asset___id = 'images___image___asset___id',
  images___image___asset___label = 'images___image___asset___label',
  images___image___asset___mimeType = 'images___image___asset___mimeType',
  images___image___asset___originalFilename = 'images___image___asset___originalFilename',
  images___image___asset___path = 'images___image___asset___path',
  images___image___asset___sha1hash = 'images___image___asset___sha1hash',
  images___image___asset___size = 'images___image___asset___size',
  images___image___asset___title = 'images___image___asset___title',
  images___image___asset___uploadId = 'images___image___asset___uploadId',
  images___image___asset___url = 'images___image___asset___url',
  images___image___crop____key = 'images___image___crop____key',
  images___image___crop____type = 'images___image___crop____type',
  images___image___crop___bottom = 'images___image___crop___bottom',
  images___image___crop___left = 'images___image___crop___left',
  images___image___crop___right = 'images___image___crop___right',
  images___image___crop___top = 'images___image___crop___top',
  images___image___hotspot____key = 'images___image___hotspot____key',
  images___image___hotspot____type = 'images___image___hotspot____type',
  images___image___hotspot___height = 'images___image___hotspot___height',
  images___image___hotspot___width = 'images___image___hotspot___width',
  images___image___hotspot___x = 'images___image___hotspot___x',
  images___image___hotspot___y = 'images___image___hotspot___y',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  location____key = 'location____key',
  location____type = 'location____type',
  location___alt = 'location___alt',
  location___lat = 'location___lat',
  location___lng = 'location___lng',
  metaDescription = 'metaDescription',
  name = 'name',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id',
  services = 'services',
  services____key = 'services____key',
  services____rawService = 'services____rawService',
  services____type = 'services____type',
  services___amount = 'services___amount',
  services___service____createdAt = 'services___service____createdAt',
  services___service____id = 'services___service____id',
  services___service____key = 'services___service____key',
  services___service____rawIcon = 'services___service____rawIcon',
  services___service____rawImages = 'services___service____rawImages',
  services___service____rawSelectionImage = 'services___service____rawSelectionImage',
  services___service____rawSelections = 'services___service____rawSelections',
  services___service____rawSlug = 'services___service____rawSlug',
  services___service____rev = 'services___service____rev',
  services___service____type = 'services___service____type',
  services___service____updatedAt = 'services___service____updatedAt',
  services___service___children = 'services___service___children',
  services___service___children___children = 'services___service___children___children',
  services___service___children___id = 'services___service___children___id',
  services___service___description = 'services___service___description',
  services___service___icon____key = 'services___service___icon____key',
  services___service___icon____rawImage = 'services___service___icon____rawImage',
  services___service___icon____type = 'services___service___icon____type',
  services___service___icon___alt = 'services___service___icon___alt',
  services___service___id = 'services___service___id',
  services___service___images = 'services___service___images',
  services___service___images____key = 'services___service___images____key',
  services___service___images____rawImage = 'services___service___images____rawImage',
  services___service___images____type = 'services___service___images____type',
  services___service___images___alt = 'services___service___images___alt',
  services___service___internal___content = 'services___service___internal___content',
  services___service___internal___contentDigest = 'services___service___internal___contentDigest',
  services___service___internal___description = 'services___service___internal___description',
  services___service___internal___fieldOwners = 'services___service___internal___fieldOwners',
  services___service___internal___ignoreType = 'services___service___internal___ignoreType',
  services___service___internal___mediaType = 'services___service___internal___mediaType',
  services___service___internal___owner = 'services___service___internal___owner',
  services___service___internal___type = 'services___service___internal___type',
  services___service___isHighlighted = 'services___service___isHighlighted',
  services___service___metaDescription = 'services___service___metaDescription',
  services___service___name = 'services___service___name',
  services___service___parent___children = 'services___service___parent___children',
  services___service___parent___id = 'services___service___parent___id',
  services___service___selectionImage____key = 'services___service___selectionImage____key',
  services___service___selectionImage____rawImage = 'services___service___selectionImage____rawImage',
  services___service___selectionImage____type = 'services___service___selectionImage____type',
  services___service___selectionImage___alt = 'services___service___selectionImage___alt',
  services___service___selections = 'services___service___selections',
  services___service___selections____key = 'services___service___selections____key',
  services___service___selections____type = 'services___service___selections____type',
  services___service___selections___description = 'services___service___selections___description',
  services___service___selections___name = 'services___service___selections___name',
  services___service___selections___price = 'services___service___selections___price',
  services___service___selections___unit = 'services___service___selections___unit',
  services___service___slug____key = 'services___service___slug____key',
  services___service___slug____type = 'services___service___slug____type',
  services___service___slug___current = 'services___service___slug___current',
  slug____key = 'slug____key',
  slug____type = 'slug____type',
  slug___current = 'slug___current'
}

export type SanityLocationFilterInput = {
  _createdAt: InputMaybe<DateQueryOperatorInput>;
  _id: InputMaybe<StringQueryOperatorInput>;
  _key: InputMaybe<StringQueryOperatorInput>;
  _rawImages: InputMaybe<JsonQueryOperatorInput>;
  _rawLocation: InputMaybe<JsonQueryOperatorInput>;
  _rawServices: InputMaybe<JsonQueryOperatorInput>;
  _rawSlug: InputMaybe<JsonQueryOperatorInput>;
  _rev: InputMaybe<StringQueryOperatorInput>;
  _type: InputMaybe<StringQueryOperatorInput>;
  _updatedAt: InputMaybe<DateQueryOperatorInput>;
  address: InputMaybe<StringQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  images: InputMaybe<SanityImageWithAltFilterListInput>;
  internal: InputMaybe<InternalFilterInput>;
  location: InputMaybe<SanityGeopointFilterInput>;
  metaDescription: InputMaybe<StringQueryOperatorInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  services: InputMaybe<SanityAvailableServiceFilterListInput>;
  slug: InputMaybe<SanitySlugFilterInput>;
};

export type SanityLocationGroupConnection = {
  __typename?: 'SanityLocationGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SanityLocationEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<SanityLocationGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<SanityLocation>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SanityLocationGroupConnectionDistinctArgs = {
  field: SanityLocationFieldsEnum;
};


export type SanityLocationGroupConnectionGroupArgs = {
  field: SanityLocationFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type SanityLocationGroupConnectionMaxArgs = {
  field: SanityLocationFieldsEnum;
};


export type SanityLocationGroupConnectionMinArgs = {
  field: SanityLocationFieldsEnum;
};


export type SanityLocationGroupConnectionSumArgs = {
  field: SanityLocationFieldsEnum;
};

export type SanityLocationSortInput = {
  fields: InputMaybe<Array<InputMaybe<SanityLocationFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SanityResolveReferencesConfiguration = {
  /** Max depth to resolve references to */
  maxDepth: Scalars['Int'];
};

export type SanitySection = {
  __typename?: 'SanitySection';
  _key: Maybe<Scalars['String']>;
  _type: Maybe<Scalars['String']>;
  description: Maybe<Scalars['String']>;
  isHidden: Maybe<Scalars['Boolean']>;
  name: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
};

export type SanitySectionFilterInput = {
  _key: InputMaybe<StringQueryOperatorInput>;
  _type: InputMaybe<StringQueryOperatorInput>;
  description: InputMaybe<StringQueryOperatorInput>;
  isHidden: InputMaybe<BooleanQueryOperatorInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  title: InputMaybe<StringQueryOperatorInput>;
};

export type SanitySelection = {
  __typename?: 'SanitySelection';
  _key: Maybe<Scalars['String']>;
  _type: Maybe<Scalars['String']>;
  description: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  price: Maybe<Scalars['Float']>;
  unit: Maybe<Scalars['String']>;
};

export type SanitySelectionFilterInput = {
  _key: InputMaybe<StringQueryOperatorInput>;
  _type: InputMaybe<StringQueryOperatorInput>;
  description: InputMaybe<StringQueryOperatorInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  price: InputMaybe<FloatQueryOperatorInput>;
  unit: InputMaybe<StringQueryOperatorInput>;
};

export type SanitySelectionFilterListInput = {
  elemMatch: InputMaybe<SanitySelectionFilterInput>;
};

export type SanityService = Node & SanityDocument & {
  __typename?: 'SanityService';
  _createdAt: Maybe<Scalars['Date']>;
  _id: Maybe<Scalars['String']>;
  _key: Maybe<Scalars['String']>;
  _rawIcon: Maybe<Scalars['JSON']>;
  _rawImages: Maybe<Scalars['JSON']>;
  _rawSelectionImage: Maybe<Scalars['JSON']>;
  _rawSelections: Maybe<Scalars['JSON']>;
  _rawSlug: Maybe<Scalars['JSON']>;
  _rev: Maybe<Scalars['String']>;
  _type: Maybe<Scalars['String']>;
  _updatedAt: Maybe<Scalars['Date']>;
  children: Array<Node>;
  description: Maybe<Scalars['String']>;
  icon: Maybe<SanityImageWithAlt>;
  id: Scalars['ID'];
  images: Maybe<Array<Maybe<SanityImageWithAlt>>>;
  internal: Internal;
  isHighlighted: Maybe<Scalars['Boolean']>;
  metaDescription: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  parent: Maybe<Node>;
  selectionImage: Maybe<SanityImageWithAlt>;
  selections: Maybe<Array<Maybe<SanitySelection>>>;
  slug: Maybe<SanitySlug>;
};


export type SanityService_CreatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type SanityService_RawIconArgs = {
  resolveReferences: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityService_RawImagesArgs = {
  resolveReferences: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityService_RawSelectionImageArgs = {
  resolveReferences: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityService_RawSelectionsArgs = {
  resolveReferences: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityService_RawSlugArgs = {
  resolveReferences: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityService_UpdatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

export type SanityServiceConnection = {
  __typename?: 'SanityServiceConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SanityServiceEdge>;
  group: Array<SanityServiceGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<SanityService>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SanityServiceConnectionDistinctArgs = {
  field: SanityServiceFieldsEnum;
};


export type SanityServiceConnectionGroupArgs = {
  field: SanityServiceFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type SanityServiceConnectionMaxArgs = {
  field: SanityServiceFieldsEnum;
};


export type SanityServiceConnectionMinArgs = {
  field: SanityServiceFieldsEnum;
};


export type SanityServiceConnectionSumArgs = {
  field: SanityServiceFieldsEnum;
};

export type SanityServiceEdge = {
  __typename?: 'SanityServiceEdge';
  next: Maybe<SanityService>;
  node: SanityService;
  previous: Maybe<SanityService>;
};

export enum SanityServiceFieldsEnum {
  _createdAt = '_createdAt',
  _id = '_id',
  _key = '_key',
  _rawIcon = '_rawIcon',
  _rawImages = '_rawImages',
  _rawSelectionImage = '_rawSelectionImage',
  _rawSelections = '_rawSelections',
  _rawSlug = '_rawSlug',
  _rev = '_rev',
  _type = '_type',
  _updatedAt = '_updatedAt',
  children = 'children',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  description = 'description',
  icon____key = 'icon____key',
  icon____rawImage = 'icon____rawImage',
  icon____type = 'icon____type',
  icon___alt = 'icon___alt',
  icon___image____key = 'icon___image____key',
  icon___image____rawAsset = 'icon___image____rawAsset',
  icon___image____rawCrop = 'icon___image____rawCrop',
  icon___image____rawHotspot = 'icon___image____rawHotspot',
  icon___image____type = 'icon___image____type',
  icon___image___asset____createdAt = 'icon___image___asset____createdAt',
  icon___image___asset____id = 'icon___image___asset____id',
  icon___image___asset____key = 'icon___image___asset____key',
  icon___image___asset____rawMetadata = 'icon___image___asset____rawMetadata',
  icon___image___asset____rawSource = 'icon___image___asset____rawSource',
  icon___image___asset____rev = 'icon___image___asset____rev',
  icon___image___asset____type = 'icon___image___asset____type',
  icon___image___asset____updatedAt = 'icon___image___asset____updatedAt',
  icon___image___asset___altText = 'icon___image___asset___altText',
  icon___image___asset___assetId = 'icon___image___asset___assetId',
  icon___image___asset___children = 'icon___image___asset___children',
  icon___image___asset___description = 'icon___image___asset___description',
  icon___image___asset___extension = 'icon___image___asset___extension',
  icon___image___asset___gatsbyImageData = 'icon___image___asset___gatsbyImageData',
  icon___image___asset___id = 'icon___image___asset___id',
  icon___image___asset___label = 'icon___image___asset___label',
  icon___image___asset___mimeType = 'icon___image___asset___mimeType',
  icon___image___asset___originalFilename = 'icon___image___asset___originalFilename',
  icon___image___asset___path = 'icon___image___asset___path',
  icon___image___asset___sha1hash = 'icon___image___asset___sha1hash',
  icon___image___asset___size = 'icon___image___asset___size',
  icon___image___asset___title = 'icon___image___asset___title',
  icon___image___asset___uploadId = 'icon___image___asset___uploadId',
  icon___image___asset___url = 'icon___image___asset___url',
  icon___image___crop____key = 'icon___image___crop____key',
  icon___image___crop____type = 'icon___image___crop____type',
  icon___image___crop___bottom = 'icon___image___crop___bottom',
  icon___image___crop___left = 'icon___image___crop___left',
  icon___image___crop___right = 'icon___image___crop___right',
  icon___image___crop___top = 'icon___image___crop___top',
  icon___image___hotspot____key = 'icon___image___hotspot____key',
  icon___image___hotspot____type = 'icon___image___hotspot____type',
  icon___image___hotspot___height = 'icon___image___hotspot___height',
  icon___image___hotspot___width = 'icon___image___hotspot___width',
  icon___image___hotspot___x = 'icon___image___hotspot___x',
  icon___image___hotspot___y = 'icon___image___hotspot___y',
  id = 'id',
  images = 'images',
  images____key = 'images____key',
  images____rawImage = 'images____rawImage',
  images____type = 'images____type',
  images___alt = 'images___alt',
  images___image____key = 'images___image____key',
  images___image____rawAsset = 'images___image____rawAsset',
  images___image____rawCrop = 'images___image____rawCrop',
  images___image____rawHotspot = 'images___image____rawHotspot',
  images___image____type = 'images___image____type',
  images___image___asset____createdAt = 'images___image___asset____createdAt',
  images___image___asset____id = 'images___image___asset____id',
  images___image___asset____key = 'images___image___asset____key',
  images___image___asset____rawMetadata = 'images___image___asset____rawMetadata',
  images___image___asset____rawSource = 'images___image___asset____rawSource',
  images___image___asset____rev = 'images___image___asset____rev',
  images___image___asset____type = 'images___image___asset____type',
  images___image___asset____updatedAt = 'images___image___asset____updatedAt',
  images___image___asset___altText = 'images___image___asset___altText',
  images___image___asset___assetId = 'images___image___asset___assetId',
  images___image___asset___children = 'images___image___asset___children',
  images___image___asset___description = 'images___image___asset___description',
  images___image___asset___extension = 'images___image___asset___extension',
  images___image___asset___gatsbyImageData = 'images___image___asset___gatsbyImageData',
  images___image___asset___id = 'images___image___asset___id',
  images___image___asset___label = 'images___image___asset___label',
  images___image___asset___mimeType = 'images___image___asset___mimeType',
  images___image___asset___originalFilename = 'images___image___asset___originalFilename',
  images___image___asset___path = 'images___image___asset___path',
  images___image___asset___sha1hash = 'images___image___asset___sha1hash',
  images___image___asset___size = 'images___image___asset___size',
  images___image___asset___title = 'images___image___asset___title',
  images___image___asset___uploadId = 'images___image___asset___uploadId',
  images___image___asset___url = 'images___image___asset___url',
  images___image___crop____key = 'images___image___crop____key',
  images___image___crop____type = 'images___image___crop____type',
  images___image___crop___bottom = 'images___image___crop___bottom',
  images___image___crop___left = 'images___image___crop___left',
  images___image___crop___right = 'images___image___crop___right',
  images___image___crop___top = 'images___image___crop___top',
  images___image___hotspot____key = 'images___image___hotspot____key',
  images___image___hotspot____type = 'images___image___hotspot____type',
  images___image___hotspot___height = 'images___image___hotspot___height',
  images___image___hotspot___width = 'images___image___hotspot___width',
  images___image___hotspot___x = 'images___image___hotspot___x',
  images___image___hotspot___y = 'images___image___hotspot___y',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  isHighlighted = 'isHighlighted',
  metaDescription = 'metaDescription',
  name = 'name',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id',
  selectionImage____key = 'selectionImage____key',
  selectionImage____rawImage = 'selectionImage____rawImage',
  selectionImage____type = 'selectionImage____type',
  selectionImage___alt = 'selectionImage___alt',
  selectionImage___image____key = 'selectionImage___image____key',
  selectionImage___image____rawAsset = 'selectionImage___image____rawAsset',
  selectionImage___image____rawCrop = 'selectionImage___image____rawCrop',
  selectionImage___image____rawHotspot = 'selectionImage___image____rawHotspot',
  selectionImage___image____type = 'selectionImage___image____type',
  selectionImage___image___asset____createdAt = 'selectionImage___image___asset____createdAt',
  selectionImage___image___asset____id = 'selectionImage___image___asset____id',
  selectionImage___image___asset____key = 'selectionImage___image___asset____key',
  selectionImage___image___asset____rawMetadata = 'selectionImage___image___asset____rawMetadata',
  selectionImage___image___asset____rawSource = 'selectionImage___image___asset____rawSource',
  selectionImage___image___asset____rev = 'selectionImage___image___asset____rev',
  selectionImage___image___asset____type = 'selectionImage___image___asset____type',
  selectionImage___image___asset____updatedAt = 'selectionImage___image___asset____updatedAt',
  selectionImage___image___asset___altText = 'selectionImage___image___asset___altText',
  selectionImage___image___asset___assetId = 'selectionImage___image___asset___assetId',
  selectionImage___image___asset___children = 'selectionImage___image___asset___children',
  selectionImage___image___asset___description = 'selectionImage___image___asset___description',
  selectionImage___image___asset___extension = 'selectionImage___image___asset___extension',
  selectionImage___image___asset___gatsbyImageData = 'selectionImage___image___asset___gatsbyImageData',
  selectionImage___image___asset___id = 'selectionImage___image___asset___id',
  selectionImage___image___asset___label = 'selectionImage___image___asset___label',
  selectionImage___image___asset___mimeType = 'selectionImage___image___asset___mimeType',
  selectionImage___image___asset___originalFilename = 'selectionImage___image___asset___originalFilename',
  selectionImage___image___asset___path = 'selectionImage___image___asset___path',
  selectionImage___image___asset___sha1hash = 'selectionImage___image___asset___sha1hash',
  selectionImage___image___asset___size = 'selectionImage___image___asset___size',
  selectionImage___image___asset___title = 'selectionImage___image___asset___title',
  selectionImage___image___asset___uploadId = 'selectionImage___image___asset___uploadId',
  selectionImage___image___asset___url = 'selectionImage___image___asset___url',
  selectionImage___image___crop____key = 'selectionImage___image___crop____key',
  selectionImage___image___crop____type = 'selectionImage___image___crop____type',
  selectionImage___image___crop___bottom = 'selectionImage___image___crop___bottom',
  selectionImage___image___crop___left = 'selectionImage___image___crop___left',
  selectionImage___image___crop___right = 'selectionImage___image___crop___right',
  selectionImage___image___crop___top = 'selectionImage___image___crop___top',
  selectionImage___image___hotspot____key = 'selectionImage___image___hotspot____key',
  selectionImage___image___hotspot____type = 'selectionImage___image___hotspot____type',
  selectionImage___image___hotspot___height = 'selectionImage___image___hotspot___height',
  selectionImage___image___hotspot___width = 'selectionImage___image___hotspot___width',
  selectionImage___image___hotspot___x = 'selectionImage___image___hotspot___x',
  selectionImage___image___hotspot___y = 'selectionImage___image___hotspot___y',
  selections = 'selections',
  selections____key = 'selections____key',
  selections____type = 'selections____type',
  selections___description = 'selections___description',
  selections___name = 'selections___name',
  selections___price = 'selections___price',
  selections___unit = 'selections___unit',
  slug____key = 'slug____key',
  slug____type = 'slug____type',
  slug___current = 'slug___current'
}

export type SanityServiceFilterInput = {
  _createdAt: InputMaybe<DateQueryOperatorInput>;
  _id: InputMaybe<StringQueryOperatorInput>;
  _key: InputMaybe<StringQueryOperatorInput>;
  _rawIcon: InputMaybe<JsonQueryOperatorInput>;
  _rawImages: InputMaybe<JsonQueryOperatorInput>;
  _rawSelectionImage: InputMaybe<JsonQueryOperatorInput>;
  _rawSelections: InputMaybe<JsonQueryOperatorInput>;
  _rawSlug: InputMaybe<JsonQueryOperatorInput>;
  _rev: InputMaybe<StringQueryOperatorInput>;
  _type: InputMaybe<StringQueryOperatorInput>;
  _updatedAt: InputMaybe<DateQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  description: InputMaybe<StringQueryOperatorInput>;
  icon: InputMaybe<SanityImageWithAltFilterInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  images: InputMaybe<SanityImageWithAltFilterListInput>;
  internal: InputMaybe<InternalFilterInput>;
  isHighlighted: InputMaybe<BooleanQueryOperatorInput>;
  metaDescription: InputMaybe<StringQueryOperatorInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  selectionImage: InputMaybe<SanityImageWithAltFilterInput>;
  selections: InputMaybe<SanitySelectionFilterListInput>;
  slug: InputMaybe<SanitySlugFilterInput>;
};

export type SanityServiceGroupConnection = {
  __typename?: 'SanityServiceGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SanityServiceEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<SanityServiceGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<SanityService>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SanityServiceGroupConnectionDistinctArgs = {
  field: SanityServiceFieldsEnum;
};


export type SanityServiceGroupConnectionGroupArgs = {
  field: SanityServiceFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type SanityServiceGroupConnectionMaxArgs = {
  field: SanityServiceFieldsEnum;
};


export type SanityServiceGroupConnectionMinArgs = {
  field: SanityServiceFieldsEnum;
};


export type SanityServiceGroupConnectionSumArgs = {
  field: SanityServiceFieldsEnum;
};

export type SanityServiceSortInput = {
  fields: InputMaybe<Array<InputMaybe<SanityServiceFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SanitySlug = {
  __typename?: 'SanitySlug';
  _key: Maybe<Scalars['String']>;
  _type: Maybe<Scalars['String']>;
  current: Maybe<Scalars['String']>;
};

export type SanitySlugFilterInput = {
  _key: InputMaybe<StringQueryOperatorInput>;
  _type: InputMaybe<StringQueryOperatorInput>;
  current: InputMaybe<StringQueryOperatorInput>;
};

export type SanitySpan = {
  __typename?: 'SanitySpan';
  _key: Maybe<Scalars['String']>;
  _type: Maybe<Scalars['String']>;
  marks: Maybe<Array<Maybe<Scalars['String']>>>;
  text: Maybe<Scalars['String']>;
};

export type SanityTimelineItem = Node & SanityDocument & {
  __typename?: 'SanityTimelineItem';
  _createdAt: Maybe<Scalars['Date']>;
  _id: Maybe<Scalars['String']>;
  _key: Maybe<Scalars['String']>;
  _rawIcon: Maybe<Scalars['JSON']>;
  _rev: Maybe<Scalars['String']>;
  _type: Maybe<Scalars['String']>;
  _updatedAt: Maybe<Scalars['Date']>;
  children: Array<Node>;
  date: Maybe<Scalars['Date']>;
  description: Maybe<Scalars['String']>;
  icon: Maybe<SanityImageWithAlt>;
  id: Scalars['ID'];
  internal: Internal;
  parent: Maybe<Node>;
  title: Maybe<Scalars['String']>;
};


export type SanityTimelineItem_CreatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type SanityTimelineItem_RawIconArgs = {
  resolveReferences: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityTimelineItem_UpdatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type SanityTimelineItemDateArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

export type SanityTimelineItemConnection = {
  __typename?: 'SanityTimelineItemConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SanityTimelineItemEdge>;
  group: Array<SanityTimelineItemGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<SanityTimelineItem>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SanityTimelineItemConnectionDistinctArgs = {
  field: SanityTimelineItemFieldsEnum;
};


export type SanityTimelineItemConnectionGroupArgs = {
  field: SanityTimelineItemFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type SanityTimelineItemConnectionMaxArgs = {
  field: SanityTimelineItemFieldsEnum;
};


export type SanityTimelineItemConnectionMinArgs = {
  field: SanityTimelineItemFieldsEnum;
};


export type SanityTimelineItemConnectionSumArgs = {
  field: SanityTimelineItemFieldsEnum;
};

export type SanityTimelineItemEdge = {
  __typename?: 'SanityTimelineItemEdge';
  next: Maybe<SanityTimelineItem>;
  node: SanityTimelineItem;
  previous: Maybe<SanityTimelineItem>;
};

export enum SanityTimelineItemFieldsEnum {
  _createdAt = '_createdAt',
  _id = '_id',
  _key = '_key',
  _rawIcon = '_rawIcon',
  _rev = '_rev',
  _type = '_type',
  _updatedAt = '_updatedAt',
  children = 'children',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  date = 'date',
  description = 'description',
  icon____key = 'icon____key',
  icon____rawImage = 'icon____rawImage',
  icon____type = 'icon____type',
  icon___alt = 'icon___alt',
  icon___image____key = 'icon___image____key',
  icon___image____rawAsset = 'icon___image____rawAsset',
  icon___image____rawCrop = 'icon___image____rawCrop',
  icon___image____rawHotspot = 'icon___image____rawHotspot',
  icon___image____type = 'icon___image____type',
  icon___image___asset____createdAt = 'icon___image___asset____createdAt',
  icon___image___asset____id = 'icon___image___asset____id',
  icon___image___asset____key = 'icon___image___asset____key',
  icon___image___asset____rawMetadata = 'icon___image___asset____rawMetadata',
  icon___image___asset____rawSource = 'icon___image___asset____rawSource',
  icon___image___asset____rev = 'icon___image___asset____rev',
  icon___image___asset____type = 'icon___image___asset____type',
  icon___image___asset____updatedAt = 'icon___image___asset____updatedAt',
  icon___image___asset___altText = 'icon___image___asset___altText',
  icon___image___asset___assetId = 'icon___image___asset___assetId',
  icon___image___asset___children = 'icon___image___asset___children',
  icon___image___asset___description = 'icon___image___asset___description',
  icon___image___asset___extension = 'icon___image___asset___extension',
  icon___image___asset___gatsbyImageData = 'icon___image___asset___gatsbyImageData',
  icon___image___asset___id = 'icon___image___asset___id',
  icon___image___asset___label = 'icon___image___asset___label',
  icon___image___asset___mimeType = 'icon___image___asset___mimeType',
  icon___image___asset___originalFilename = 'icon___image___asset___originalFilename',
  icon___image___asset___path = 'icon___image___asset___path',
  icon___image___asset___sha1hash = 'icon___image___asset___sha1hash',
  icon___image___asset___size = 'icon___image___asset___size',
  icon___image___asset___title = 'icon___image___asset___title',
  icon___image___asset___uploadId = 'icon___image___asset___uploadId',
  icon___image___asset___url = 'icon___image___asset___url',
  icon___image___crop____key = 'icon___image___crop____key',
  icon___image___crop____type = 'icon___image___crop____type',
  icon___image___crop___bottom = 'icon___image___crop___bottom',
  icon___image___crop___left = 'icon___image___crop___left',
  icon___image___crop___right = 'icon___image___crop___right',
  icon___image___crop___top = 'icon___image___crop___top',
  icon___image___hotspot____key = 'icon___image___hotspot____key',
  icon___image___hotspot____type = 'icon___image___hotspot____type',
  icon___image___hotspot___height = 'icon___image___hotspot___height',
  icon___image___hotspot___width = 'icon___image___hotspot___width',
  icon___image___hotspot___x = 'icon___image___hotspot___x',
  icon___image___hotspot___y = 'icon___image___hotspot___y',
  id = 'id',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id',
  title = 'title'
}

export type SanityTimelineItemFilterInput = {
  _createdAt: InputMaybe<DateQueryOperatorInput>;
  _id: InputMaybe<StringQueryOperatorInput>;
  _key: InputMaybe<StringQueryOperatorInput>;
  _rawIcon: InputMaybe<JsonQueryOperatorInput>;
  _rev: InputMaybe<StringQueryOperatorInput>;
  _type: InputMaybe<StringQueryOperatorInput>;
  _updatedAt: InputMaybe<DateQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  date: InputMaybe<DateQueryOperatorInput>;
  description: InputMaybe<StringQueryOperatorInput>;
  icon: InputMaybe<SanityImageWithAltFilterInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  title: InputMaybe<StringQueryOperatorInput>;
};

export type SanityTimelineItemGroupConnection = {
  __typename?: 'SanityTimelineItemGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SanityTimelineItemEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<SanityTimelineItemGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<SanityTimelineItem>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SanityTimelineItemGroupConnectionDistinctArgs = {
  field: SanityTimelineItemFieldsEnum;
};


export type SanityTimelineItemGroupConnectionGroupArgs = {
  field: SanityTimelineItemFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type SanityTimelineItemGroupConnectionMaxArgs = {
  field: SanityTimelineItemFieldsEnum;
};


export type SanityTimelineItemGroupConnectionMinArgs = {
  field: SanityTimelineItemFieldsEnum;
};


export type SanityTimelineItemGroupConnectionSumArgs = {
  field: SanityTimelineItemFieldsEnum;
};

export type SanityTimelineItemSortInput = {
  fields: InputMaybe<Array<InputMaybe<SanityTimelineItemFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type Site = Node & {
  __typename?: 'Site';
  buildTime: Maybe<Scalars['Date']>;
  children: Array<Node>;
  host: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  internal: Internal;
  jsxRuntime: Maybe<Scalars['String']>;
  parent: Maybe<Node>;
  pathPrefix: Maybe<Scalars['String']>;
  polyfill: Maybe<Scalars['Boolean']>;
  port: Maybe<Scalars['Int']>;
  siteMetadata: Maybe<SiteSiteMetadata>;
};


export type SiteBuildTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  __typename?: 'SiteBuildMetadata';
  buildTime: Maybe<Scalars['Date']>;
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  parent: Maybe<Node>;
};


export type SiteBuildMetadataBuildTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

export type SiteBuildMetadataConnection = {
  __typename?: 'SiteBuildMetadataConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SiteBuildMetadataEdge>;
  group: Array<SiteBuildMetadataGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  field: SiteBuildMetadataFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type SiteBuildMetadataConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  __typename?: 'SiteBuildMetadataEdge';
  next: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous: Maybe<SiteBuildMetadata>;
};

export enum SiteBuildMetadataFieldsEnum {
  buildTime = 'buildTime',
  children = 'children',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  id = 'id',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id'
}

export type SiteBuildMetadataFilterInput = {
  buildTime: InputMaybe<DateQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
};

export type SiteBuildMetadataGroupConnection = {
  __typename?: 'SiteBuildMetadataGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SiteBuildMetadataEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<SiteBuildMetadataGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SiteBuildMetadataGroupConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionGroupArgs = {
  field: SiteBuildMetadataFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type SiteBuildMetadataGroupConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataSortInput = {
  fields: InputMaybe<Array<InputMaybe<SiteBuildMetadataFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  __typename?: 'SiteConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SiteEdge>;
  group: Array<SiteGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  field: SiteFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type SiteConnectionMaxArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionMinArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionSumArgs = {
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  __typename?: 'SiteEdge';
  next: Maybe<Site>;
  node: Site;
  previous: Maybe<Site>;
};

export enum SiteFieldsEnum {
  buildTime = 'buildTime',
  children = 'children',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  host = 'host',
  id = 'id',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  jsxRuntime = 'jsxRuntime',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id',
  pathPrefix = 'pathPrefix',
  polyfill = 'polyfill',
  port = 'port',
  siteMetadata___description = 'siteMetadata___description',
  siteMetadata___siteUrl = 'siteMetadata___siteUrl',
  siteMetadata___title = 'siteMetadata___title'
}

export type SiteFilterInput = {
  buildTime: InputMaybe<DateQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  host: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  jsxRuntime: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  pathPrefix: InputMaybe<StringQueryOperatorInput>;
  polyfill: InputMaybe<BooleanQueryOperatorInput>;
  port: InputMaybe<IntQueryOperatorInput>;
  siteMetadata: InputMaybe<SiteSiteMetadataFilterInput>;
};

export type SiteFunction = Node & {
  __typename?: 'SiteFunction';
  absoluteCompiledFilePath: Scalars['String'];
  children: Array<Node>;
  functionRoute: Scalars['String'];
  id: Scalars['ID'];
  internal: Internal;
  matchPath: Maybe<Scalars['String']>;
  originalAbsoluteFilePath: Scalars['String'];
  originalRelativeFilePath: Scalars['String'];
  parent: Maybe<Node>;
  pluginName: Scalars['String'];
  relativeCompiledFilePath: Scalars['String'];
};

export type SiteFunctionConnection = {
  __typename?: 'SiteFunctionConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SiteFunctionEdge>;
  group: Array<SiteFunctionGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SiteFunctionConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionGroupArgs = {
  field: SiteFunctionFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type SiteFunctionConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionEdge = {
  __typename?: 'SiteFunctionEdge';
  next: Maybe<SiteFunction>;
  node: SiteFunction;
  previous: Maybe<SiteFunction>;
};

export enum SiteFunctionFieldsEnum {
  absoluteCompiledFilePath = 'absoluteCompiledFilePath',
  children = 'children',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  functionRoute = 'functionRoute',
  id = 'id',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  matchPath = 'matchPath',
  originalAbsoluteFilePath = 'originalAbsoluteFilePath',
  originalRelativeFilePath = 'originalRelativeFilePath',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id',
  pluginName = 'pluginName',
  relativeCompiledFilePath = 'relativeCompiledFilePath'
}

export type SiteFunctionFilterInput = {
  absoluteCompiledFilePath: InputMaybe<StringQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  functionRoute: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  matchPath: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  pluginName: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath: InputMaybe<StringQueryOperatorInput>;
};

export type SiteFunctionGroupConnection = {
  __typename?: 'SiteFunctionGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SiteFunctionEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<SiteFunctionGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SiteFunctionGroupConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionGroupArgs = {
  field: SiteFunctionFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type SiteFunctionGroupConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionSortInput = {
  fields: InputMaybe<Array<InputMaybe<SiteFunctionFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteGroupConnection = {
  __typename?: 'SiteGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SiteEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<SiteGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SiteGroupConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionGroupArgs = {
  field: SiteFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type SiteGroupConnectionMaxArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionMinArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionSumArgs = {
  field: SiteFieldsEnum;
};

export type SitePage = Node & {
  __typename?: 'SitePage';
  children: Array<Node>;
  component: Scalars['String'];
  componentChunkName: Scalars['String'];
  id: Scalars['ID'];
  internal: Internal;
  internalComponentName: Scalars['String'];
  matchPath: Maybe<Scalars['String']>;
  pageContext: Maybe<Scalars['JSON']>;
  parent: Maybe<Node>;
  path: Scalars['String'];
  pluginCreator: Maybe<SitePlugin>;
};

export type SitePageConnection = {
  __typename?: 'SitePageConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SitePageEdge>;
  group: Array<SitePageGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  field: SitePageFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type SitePageConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionMinArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionSumArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageEdge = {
  __typename?: 'SitePageEdge';
  next: Maybe<SitePage>;
  node: SitePage;
  previous: Maybe<SitePage>;
};

export enum SitePageFieldsEnum {
  children = 'children',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  component = 'component',
  componentChunkName = 'componentChunkName',
  id = 'id',
  internalComponentName = 'internalComponentName',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  matchPath = 'matchPath',
  pageContext = 'pageContext',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id',
  path = 'path',
  pluginCreator___browserAPIs = 'pluginCreator___browserAPIs',
  pluginCreator___children = 'pluginCreator___children',
  pluginCreator___children___children = 'pluginCreator___children___children',
  pluginCreator___children___children___children = 'pluginCreator___children___children___children',
  pluginCreator___children___children___id = 'pluginCreator___children___children___id',
  pluginCreator___children___id = 'pluginCreator___children___id',
  pluginCreator___children___internal___content = 'pluginCreator___children___internal___content',
  pluginCreator___children___internal___contentDigest = 'pluginCreator___children___internal___contentDigest',
  pluginCreator___children___internal___description = 'pluginCreator___children___internal___description',
  pluginCreator___children___internal___fieldOwners = 'pluginCreator___children___internal___fieldOwners',
  pluginCreator___children___internal___ignoreType = 'pluginCreator___children___internal___ignoreType',
  pluginCreator___children___internal___mediaType = 'pluginCreator___children___internal___mediaType',
  pluginCreator___children___internal___owner = 'pluginCreator___children___internal___owner',
  pluginCreator___children___internal___type = 'pluginCreator___children___internal___type',
  pluginCreator___children___parent___children = 'pluginCreator___children___parent___children',
  pluginCreator___children___parent___id = 'pluginCreator___children___parent___id',
  pluginCreator___id = 'pluginCreator___id',
  pluginCreator___internal___content = 'pluginCreator___internal___content',
  pluginCreator___internal___contentDigest = 'pluginCreator___internal___contentDigest',
  pluginCreator___internal___description = 'pluginCreator___internal___description',
  pluginCreator___internal___fieldOwners = 'pluginCreator___internal___fieldOwners',
  pluginCreator___internal___ignoreType = 'pluginCreator___internal___ignoreType',
  pluginCreator___internal___mediaType = 'pluginCreator___internal___mediaType',
  pluginCreator___internal___owner = 'pluginCreator___internal___owner',
  pluginCreator___internal___type = 'pluginCreator___internal___type',
  pluginCreator___name = 'pluginCreator___name',
  pluginCreator___nodeAPIs = 'pluginCreator___nodeAPIs',
  pluginCreator___packageJson = 'pluginCreator___packageJson',
  pluginCreator___parent___children = 'pluginCreator___parent___children',
  pluginCreator___parent___children___children = 'pluginCreator___parent___children___children',
  pluginCreator___parent___children___id = 'pluginCreator___parent___children___id',
  pluginCreator___parent___id = 'pluginCreator___parent___id',
  pluginCreator___parent___internal___content = 'pluginCreator___parent___internal___content',
  pluginCreator___parent___internal___contentDigest = 'pluginCreator___parent___internal___contentDigest',
  pluginCreator___parent___internal___description = 'pluginCreator___parent___internal___description',
  pluginCreator___parent___internal___fieldOwners = 'pluginCreator___parent___internal___fieldOwners',
  pluginCreator___parent___internal___ignoreType = 'pluginCreator___parent___internal___ignoreType',
  pluginCreator___parent___internal___mediaType = 'pluginCreator___parent___internal___mediaType',
  pluginCreator___parent___internal___owner = 'pluginCreator___parent___internal___owner',
  pluginCreator___parent___internal___type = 'pluginCreator___parent___internal___type',
  pluginCreator___parent___parent___children = 'pluginCreator___parent___parent___children',
  pluginCreator___parent___parent___id = 'pluginCreator___parent___parent___id',
  pluginCreator___pluginFilepath = 'pluginCreator___pluginFilepath',
  pluginCreator___pluginOptions = 'pluginCreator___pluginOptions',
  pluginCreator___resolve = 'pluginCreator___resolve',
  pluginCreator___ssrAPIs = 'pluginCreator___ssrAPIs',
  pluginCreator___version = 'pluginCreator___version'
}

export type SitePageFilterInput = {
  children: InputMaybe<NodeFilterListInput>;
  component: InputMaybe<StringQueryOperatorInput>;
  componentChunkName: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  internalComponentName: InputMaybe<StringQueryOperatorInput>;
  matchPath: InputMaybe<StringQueryOperatorInput>;
  pageContext: InputMaybe<JsonQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  path: InputMaybe<StringQueryOperatorInput>;
  pluginCreator: InputMaybe<SitePluginFilterInput>;
};

export type SitePageGroupConnection = {
  __typename?: 'SitePageGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SitePageEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<SitePageGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SitePageGroupConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionGroupArgs = {
  field: SitePageFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type SitePageGroupConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionMinArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionSumArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageSortInput = {
  fields: InputMaybe<Array<InputMaybe<SitePageFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  __typename?: 'SitePlugin';
  browserAPIs: Maybe<Array<Maybe<Scalars['String']>>>;
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  name: Maybe<Scalars['String']>;
  nodeAPIs: Maybe<Array<Maybe<Scalars['String']>>>;
  packageJson: Maybe<Scalars['JSON']>;
  parent: Maybe<Node>;
  pluginFilepath: Maybe<Scalars['String']>;
  pluginOptions: Maybe<Scalars['JSON']>;
  resolve: Maybe<Scalars['String']>;
  ssrAPIs: Maybe<Array<Maybe<Scalars['String']>>>;
  version: Maybe<Scalars['String']>;
};

export type SitePluginConnection = {
  __typename?: 'SitePluginConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SitePluginEdge>;
  group: Array<SitePluginGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  field: SitePluginFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type SitePluginConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  __typename?: 'SitePluginEdge';
  next: Maybe<SitePlugin>;
  node: SitePlugin;
  previous: Maybe<SitePlugin>;
};

export enum SitePluginFieldsEnum {
  browserAPIs = 'browserAPIs',
  children = 'children',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  id = 'id',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  name = 'name',
  nodeAPIs = 'nodeAPIs',
  packageJson = 'packageJson',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id',
  pluginFilepath = 'pluginFilepath',
  pluginOptions = 'pluginOptions',
  resolve = 'resolve',
  ssrAPIs = 'ssrAPIs',
  version = 'version'
}

export type SitePluginFilterInput = {
  browserAPIs: InputMaybe<StringQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs: InputMaybe<StringQueryOperatorInput>;
  packageJson: InputMaybe<JsonQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  pluginFilepath: InputMaybe<StringQueryOperatorInput>;
  pluginOptions: InputMaybe<JsonQueryOperatorInput>;
  resolve: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs: InputMaybe<StringQueryOperatorInput>;
  version: InputMaybe<StringQueryOperatorInput>;
};

export type SitePluginGroupConnection = {
  __typename?: 'SitePluginGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SitePluginEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<SitePluginGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SitePluginGroupConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionGroupArgs = {
  field: SitePluginFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type SitePluginGroupConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginSortInput = {
  fields: InputMaybe<Array<InputMaybe<SitePluginFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  __typename?: 'SiteSiteMetadata';
  description: Maybe<Scalars['String']>;
  siteUrl: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataFilterInput = {
  description: InputMaybe<StringQueryOperatorInput>;
  siteUrl: InputMaybe<StringQueryOperatorInput>;
  title: InputMaybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields: InputMaybe<Array<InputMaybe<SiteFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export enum SortOrderEnum {
  ASC = 'ASC',
  DESC = 'DESC'
}

export type StaticImage = Node & {
  __typename?: 'StaticImage';
  absolutePath: Maybe<Scalars['String']>;
  accessTime: Maybe<Scalars['Date']>;
  atime: Maybe<Scalars['Date']>;
  atimeMs: Maybe<Scalars['Float']>;
  base: Maybe<Scalars['String']>;
  birthTime: Maybe<Scalars['Date']>;
  birthtime: Maybe<Scalars['Date']>;
  birthtimeMs: Maybe<Scalars['Float']>;
  blksize: Maybe<Scalars['Int']>;
  blocks: Maybe<Scalars['Int']>;
  changeTime: Maybe<Scalars['Date']>;
  children: Array<Node>;
  ctime: Maybe<Scalars['Date']>;
  ctimeMs: Maybe<Scalars['Float']>;
  dev: Maybe<Scalars['Float']>;
  dir: Maybe<Scalars['String']>;
  ext: Maybe<Scalars['String']>;
  extension: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  ino: Maybe<Scalars['Float']>;
  internal: Internal;
  mode: Maybe<Scalars['Int']>;
  modifiedTime: Maybe<Scalars['Date']>;
  mtime: Maybe<Scalars['Date']>;
  mtimeMs: Maybe<Scalars['Float']>;
  name: Maybe<Scalars['String']>;
  nlink: Maybe<Scalars['Int']>;
  parent: Maybe<Node>;
  prettySize: Maybe<Scalars['String']>;
  rdev: Maybe<Scalars['Int']>;
  relativeDirectory: Maybe<Scalars['String']>;
  relativePath: Maybe<Scalars['String']>;
  root: Maybe<Scalars['String']>;
  size: Maybe<Scalars['Int']>;
  sourceInstanceName: Maybe<Scalars['String']>;
  uid: Maybe<Scalars['Int']>;
};


export type StaticImageAccessTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type StaticImageAtimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type StaticImageBirthTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type StaticImageBirthtimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type StaticImageChangeTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type StaticImageCtimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type StaticImageModifiedTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type StaticImageMtimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

export type StaticImageConnection = {
  __typename?: 'StaticImageConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<StaticImageEdge>;
  group: Array<StaticImageGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<StaticImage>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type StaticImageConnectionDistinctArgs = {
  field: StaticImageFieldsEnum;
};


export type StaticImageConnectionGroupArgs = {
  field: StaticImageFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type StaticImageConnectionMaxArgs = {
  field: StaticImageFieldsEnum;
};


export type StaticImageConnectionMinArgs = {
  field: StaticImageFieldsEnum;
};


export type StaticImageConnectionSumArgs = {
  field: StaticImageFieldsEnum;
};

export type StaticImageEdge = {
  __typename?: 'StaticImageEdge';
  next: Maybe<StaticImage>;
  node: StaticImage;
  previous: Maybe<StaticImage>;
};

export enum StaticImageFieldsEnum {
  absolutePath = 'absolutePath',
  accessTime = 'accessTime',
  atime = 'atime',
  atimeMs = 'atimeMs',
  base = 'base',
  birthTime = 'birthTime',
  birthtime = 'birthtime',
  birthtimeMs = 'birthtimeMs',
  blksize = 'blksize',
  blocks = 'blocks',
  changeTime = 'changeTime',
  children = 'children',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  ctime = 'ctime',
  ctimeMs = 'ctimeMs',
  dev = 'dev',
  dir = 'dir',
  ext = 'ext',
  extension = 'extension',
  id = 'id',
  ino = 'ino',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  mode = 'mode',
  modifiedTime = 'modifiedTime',
  mtime = 'mtime',
  mtimeMs = 'mtimeMs',
  name = 'name',
  nlink = 'nlink',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id',
  prettySize = 'prettySize',
  rdev = 'rdev',
  relativeDirectory = 'relativeDirectory',
  relativePath = 'relativePath',
  root = 'root',
  size = 'size',
  sourceInstanceName = 'sourceInstanceName',
  uid = 'uid'
}

export type StaticImageFilterInput = {
  absolutePath: InputMaybe<StringQueryOperatorInput>;
  accessTime: InputMaybe<DateQueryOperatorInput>;
  atime: InputMaybe<DateQueryOperatorInput>;
  atimeMs: InputMaybe<FloatQueryOperatorInput>;
  base: InputMaybe<StringQueryOperatorInput>;
  birthTime: InputMaybe<DateQueryOperatorInput>;
  birthtime: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs: InputMaybe<FloatQueryOperatorInput>;
  blksize: InputMaybe<IntQueryOperatorInput>;
  blocks: InputMaybe<IntQueryOperatorInput>;
  changeTime: InputMaybe<DateQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  ctime: InputMaybe<DateQueryOperatorInput>;
  ctimeMs: InputMaybe<FloatQueryOperatorInput>;
  dev: InputMaybe<FloatQueryOperatorInput>;
  dir: InputMaybe<StringQueryOperatorInput>;
  ext: InputMaybe<StringQueryOperatorInput>;
  extension: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  ino: InputMaybe<FloatQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  mode: InputMaybe<IntQueryOperatorInput>;
  modifiedTime: InputMaybe<DateQueryOperatorInput>;
  mtime: InputMaybe<DateQueryOperatorInput>;
  mtimeMs: InputMaybe<FloatQueryOperatorInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  nlink: InputMaybe<IntQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  prettySize: InputMaybe<StringQueryOperatorInput>;
  rdev: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory: InputMaybe<StringQueryOperatorInput>;
  relativePath: InputMaybe<StringQueryOperatorInput>;
  root: InputMaybe<StringQueryOperatorInput>;
  size: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName: InputMaybe<StringQueryOperatorInput>;
  uid: InputMaybe<IntQueryOperatorInput>;
};

export type StaticImageGroupConnection = {
  __typename?: 'StaticImageGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<StaticImageEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<StaticImageGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<StaticImage>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type StaticImageGroupConnectionDistinctArgs = {
  field: StaticImageFieldsEnum;
};


export type StaticImageGroupConnectionGroupArgs = {
  field: StaticImageFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type StaticImageGroupConnectionMaxArgs = {
  field: StaticImageFieldsEnum;
};


export type StaticImageGroupConnectionMinArgs = {
  field: StaticImageFieldsEnum;
};


export type StaticImageGroupConnectionSumArgs = {
  field: StaticImageFieldsEnum;
};

export type StaticImageSortInput = {
  fields: InputMaybe<Array<InputMaybe<StaticImageFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type StringQueryOperatorInput = {
  eq: InputMaybe<Scalars['String']>;
  glob: InputMaybe<Scalars['String']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ne: InputMaybe<Scalars['String']>;
  nin: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex: InputMaybe<Scalars['String']>;
};

export type TransformOptions = {
  cropFocus: InputMaybe<ImageCropFocus>;
  duotone: InputMaybe<DuotoneGradient>;
  fit: InputMaybe<ImageFit>;
  grayscale: InputMaybe<Scalars['Boolean']>;
  rotate: InputMaybe<Scalars['Int']>;
  trim: InputMaybe<Scalars['Float']>;
};

export type WebPOptions = {
  quality: InputMaybe<Scalars['Int']>;
};

export type DrawerQueryVariables = Exact<{ [key: string]: never; }>;


export type DrawerQuery = { __typename?: 'Query', sanityInfo: { __typename?: 'SanityInfo', erecieptLink: string, logo: { __typename?: 'SanityImageWithAlt', alt: string, image: { __typename?: 'SanityImage', asset: { __typename?: 'SanityImageAsset', gatsbyImageData: any } } } } };

export type FooterQueryVariables = Exact<{ [key: string]: never; }>;


export type FooterQuery = { __typename?: 'Query', sanityInfo: { __typename?: 'SanityInfo', email: string, address: string, phoneNumber: string, facebookLink: string, erecieptLink: string, instagramLink: string, logo: { __typename?: 'SanityImageWithAlt', alt: string, image: { __typename?: 'SanityImage', asset: { __typename?: 'SanityImageAsset', gatsbyImageData: any } } } } };

export type HeaderQueryVariables = Exact<{ [key: string]: never; }>;


export type HeaderQuery = { __typename?: 'Query', sanityInfo: { __typename?: 'SanityInfo', erecieptLink: string, logo: { __typename?: 'SanityImageWithAlt', alt: string, image: { __typename?: 'SanityImage', asset: { __typename?: 'SanityImageAsset', gatsbyImageData: any } } } } };

export type BannerQueryVariables = Exact<{ [key: string]: never; }>;


export type BannerQuery = { __typename?: 'Query', sanityHome: { __typename?: 'SanityHome', bannerImage: { __typename?: 'SanityImageWithAlt', alt: string, image: { __typename?: 'SanityImage', asset: { __typename?: 'SanityImageAsset', gatsbyImageData: any }, hotspot: { __typename?: 'SanityImageHotspot', x: number, y: number } } } }, sanityInfo: { __typename?: 'SanityInfo', logo: { __typename?: 'SanityImageWithAlt', alt: string, image: { __typename?: 'SanityImage', asset: { __typename?: 'SanityImageAsset', gatsbyImageData: any } } } } };

export type GiftCardsQueryVariables = Exact<{ [key: string]: never; }>;


export type GiftCardsQuery = { __typename?: 'Query', sanityHome: { __typename?: 'SanityHome', giftCards: { __typename?: 'SanitySection', name: string, title: string, description: string } }, sanityInfo: { __typename?: 'SanityInfo', phoneNumber: string } };

export type LocationsQueryVariables = Exact<{ [key: string]: never; }>;


export type LocationsQuery = { __typename?: 'Query', sanityHome: { __typename?: 'SanityHome', locations: { __typename?: 'SanitySection', title: string, name: string } }, locations: { __typename?: 'SanityLocationConnection', nodes: Array<{ __typename?: 'SanityLocation', id: string, name: string, address: string, geopoint: { __typename?: 'SanityGeopoint', lat: number, lng: number }, slug: { __typename?: 'SanitySlug', current: string } }> } };

export type PaymentQueryVariables = Exact<{ [key: string]: never; }>;


export type PaymentQuery = { __typename?: 'Query', sanityHome: { __typename?: 'SanityHome', payment: { __typename?: 'SanitySection', name: string, title: string, description: string } }, sanityInfo: { __typename?: 'SanityInfo', erecieptLink: string } };

export type ServicesQueryVariables = Exact<{ [key: string]: never; }>;


export type ServicesQuery = { __typename?: 'Query', sanityHome: { __typename?: 'SanityHome', services: { __typename?: 'SanitySection', name: string, title: string } }, serviceIcons: { __typename?: 'SanityServiceConnection', nodes: Array<{ __typename?: 'SanityService', id: string, icon: { __typename?: 'SanityImageWithAlt', alt: string, image: { __typename?: 'SanityImage', asset: { __typename?: 'SanityImageAsset', gatsbyImageData: any } } } }> }, highlightedServices: { __typename?: 'SanityServiceConnection', nodes: Array<{ __typename?: 'SanityService', id: string, name: string, description: string, slug: { __typename?: 'SanitySlug', current: string }, icon: { __typename?: 'SanityImageWithAlt', alt: string, image: { __typename?: 'SanityImage', asset: { __typename?: 'SanityImageAsset', gatsbyImageData: any } } } }> } };

export type TimelineQueryVariables = Exact<{ [key: string]: never; }>;


export type TimelineQuery = { __typename?: 'Query', sanityHome: { __typename?: 'SanityHome', timeline: { __typename?: 'SanitySection', name: string, title: string } }, allSanityTimelineItem: { __typename?: 'SanityTimelineItemConnection', nodes: Array<{ __typename?: 'SanityTimelineItem', id: string, date: any, description: string, title: string, icon: { __typename?: 'SanityImageWithAlt', alt: string, image: { __typename?: 'SanityImage', asset: { __typename?: 'SanityImageAsset', gatsbyImageData: any } } } }> } };

export type LocationsPageQueryVariables = Exact<{ [key: string]: never; }>;


export type LocationsPageQuery = { __typename?: 'Query', allSanityLocation: { __typename?: 'SanityLocationConnection', nodes: Array<{ __typename?: 'SanityLocation', id: string, name: string, address: string, slug: { __typename?: 'SanitySlug', current: string }, geopoint: { __typename?: 'SanityGeopoint', lat: number, lng: number } }> } };

export type ServicesPageQueryVariables = Exact<{ [key: string]: never; }>;


export type ServicesPageQuery = { __typename?: 'Query', allSanityService: { __typename?: 'SanityServiceConnection', nodes: Array<{ __typename?: 'SanityService', id: string, name: string, description: string, slug: { __typename?: 'SanitySlug', current: string }, icon: { __typename?: 'SanityImageWithAlt', alt: string, image: { __typename?: 'SanityImage', asset: { __typename?: 'SanityImageAsset', gatsbyImageData: any } } } }> } };

export type LocationPageQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type LocationPageQuery = { __typename?: 'Query', location: { __typename?: 'SanityLocation', id: string, name: string, address: string, metaDescription: string, images: Array<{ __typename?: 'SanityImageWithAlt', alt: string, image: { __typename?: 'SanityImage', asset: { __typename?: 'SanityImageAsset', gatsbyImageData: any }, hotspot: { __typename?: 'SanityImageHotspot', y: number, x: number } } }>, geopoint: { __typename?: 'SanityGeopoint', lat: number, lng: number }, services: Array<{ __typename?: 'SanityAvailableService', amount: number, service: { __typename?: 'SanityService', id: string, name: string, description: string, slug: { __typename?: 'SanitySlug', current: string }, icon: { __typename?: 'SanityImageWithAlt', alt: string, image: { __typename?: 'SanityImage', asset: { __typename?: 'SanityImageAsset', gatsbyImageData: any } } } } }> }, otherLocations: { __typename?: 'SanityLocationConnection', nodes: Array<{ __typename?: 'SanityLocation', id: string, name: string, address: string, slug: { __typename?: 'SanitySlug', current: string }, geopoint: { __typename?: 'SanityGeopoint', lat: number, lng: number } }> } };

export type ServicePageQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type ServicePageQuery = { __typename?: 'Query', service: { __typename?: 'SanityService', id: string, name: string, description: string, metaDescription: string, selections: Array<{ __typename?: 'SanitySelection', description: string, name: string, price: number, unit: string }>, selectionImage: { __typename?: 'SanityImageWithAlt', alt: string, image: { __typename?: 'SanityImage', asset: { __typename?: 'SanityImageAsset', gatsbyImageData: any }, hotspot: { __typename?: 'SanityImageHotspot', y: number, x: number } } }, images: Array<{ __typename?: 'SanityImageWithAlt', alt: string, image: { __typename?: 'SanityImage', asset: { __typename?: 'SanityImageAsset', gatsbyImageData: any }, hotspot: { __typename?: 'SanityImageHotspot', y: number, x: number } } }> }, otherServices: { __typename?: 'SanityServiceConnection', nodes: Array<{ __typename?: 'SanityService', id: string, name: string, description: string, slug: { __typename?: 'SanitySlug', current: string }, icon: { __typename?: 'SanityImageWithAlt', alt: string, image: { __typename?: 'SanityImage', asset: { __typename?: 'SanityImageAsset', gatsbyImageData: any } } } }> }, availableLocations: { __typename?: 'SanityLocationConnection', nodes: Array<{ __typename?: 'SanityLocation', id: string, name: string, address: string, slug: { __typename?: 'SanitySlug', current: string }, geopoint: { __typename?: 'SanityGeopoint', lat: number, lng: number } }> } };

export type ContactUsQueryVariables = Exact<{ [key: string]: never; }>;


export type ContactUsQuery = { __typename?: 'Query', sanityInfo: { __typename?: 'SanityInfo', email: string, address: string, phoneNumber: string } };
