# ProductBase

ProductBase is a full-stack product catalog management application
focused on structured product data, Excel imports, tenant-aware APIs,
and an AI/RAG-ready architecture.

## Features

-   Supabase authentication
-   Product catalog management
-   Excel (`.xlsx`) product import
-   Background import jobs
-   Active import job polling
-   Product search, filtering, and pagination
-   Bulk product deletion
-   Loading skeletons and responsive UI
-   TanStack Query for server-state management
-   Axios API client with Supabase Bearer authentication
-   Tenant-aware backend architecture
-   RAG-ready product data

## Tech Stack

### Frontend

-   Next.js
-   React
-   SCSS Modules
-   TanStack Query
-   Axios
-   Supabase Auth
-   AOS

### Backend

-   Python
-   FastAPI
-   SQLAlchemy
-   PostgreSQL
-   Supabase/JWT access tokens
-   FastAPI BackgroundTasks

## Architecture

``` text
Next.js
   |
   +-- Supabase Auth
   |       |
   |       +-- Access Token
   |
   +-- TanStack Query
   |       |
   |       +-- Axios
   |             |
   |             +-- Bearer Token
   |
   +------------------> FastAPI
                            |
                            +-- Authentication
                            +-- Tenant Resolution
                            +-- Product APIs
                            +-- Import API
                            +-- Background Jobs
                                      |
                                      v
                                  PostgreSQL
```

## Frontend Structure

``` text
src/
├── app/
│   ├── auth/
│   ├── productbase/
│   └── layout.jsx
├── components/
│   ├── layout/
│   ├── products/
│   └── common/
├── context/
│   ├── AuthContext.jsx
│   └── JobContext.jsx
├── hooks/
│   ├── useProducts.js
│   └── useImportJob.js
├── lib/
│   ├── supabase.js
│   └── axios.js
├── providers/
│   └── QueryProvider.jsx
├── services/
│   ├── auth.service.js
│   └── product.service.js
└── styles/
    └── globals.scss
```

## Getting Started

### Clone

``` bash
git clone <your-repository-url>
cd productbase_app
```

### Install

``` bash
npm install
```

### Environment Variables

Create `.env.local`:

``` env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_API_URL=http://localhost:8000
```

### Run

``` bash
npm run dev
```

The frontend runs at:

``` text
http://localhost:3000
```

## Authentication

ProductBase uses Supabase Authentication.

The Supabase session provides an access token which is attached to
protected API requests by the Axios client:

``` http
Authorization: Bearer <supabase_access_token>
```

This keeps authentication centralized while allowing API services to
remain simple.

## TanStack Query

TanStack Query manages server state, caching, refetching, mutations, and
import-job polling.

Example:

``` js
export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
};
```

After a product mutation:

``` js
queryClient.invalidateQueries({
  queryKey: ["products"],
});
```

On logout, authenticated query data can be cleared:

``` js
queryClient.clear();
```

## Product Import

Products can be imported from an Excel file.

The frontend sends the file as `multipart/form-data`:

``` js
const formData = new FormData();

formData.append("file", file);

await api.post("/import", formData);
```

FastAPI receives the file with:

``` python
@router.post("/import")
async def import_product_file(
    background_tasks: BackgroundTasks,
    file: UploadFile = File(...),
    tenant_id: UUID = Depends(get_current_tenant),
    db: Session = Depends(get_db),
):
    ...
```

## Import Job Flow

``` text
Select Excel file
       |
       v
POST /import
       |
       v
Create import job
       |
       v
Background processing
       |
       v
Insert products
       |
       v
Frontend polls active job
       |
       v
Job completed
       |
       v
Refresh products query
```

TanStack Query can poll the job endpoint:

``` js
useQuery({
  queryKey: ["active-import-job"],
  queryFn: getActiveImportJob,
  refetchInterval: 5000,
});
```

## Sample Catalog

A sample product catalog can be placed in:

``` text
public/
└── sample/
    └── ProductBase_Catalog_200_Products.xlsx
```

It can be loaded in the browser and converted into a `File` before
sending it through the normal import flow.

## Product Catalog

The catalog UI supports:

-   Category filtering
-   Product search
-   Pagination
-   Page-size selection
-   Product details
-   Bulk selection
-   Bulk deletion
-   Importing products
-   Import status tracking

## API Authentication Flow

``` text
User logs in
     |
     v
Supabase creates session
     |
     v
Access token
     |
     v
Axios interceptor
     |
     v
Authorization: Bearer <token>
     |
     v
FastAPI
     |
     v
Validate token + resolve tenant
     |
     v
Access tenant-specific data
```

## Development

Start development:

``` bash
npm run dev
```

Build:

``` bash
npm run build
```

Run production:

``` bash
npm run start
```

Lint:

``` bash
npm run lint
```

## Future Improvements

-   Semantic product search
-   Product embeddings
-   Vector database integration
-   Natural-language product search
-   AI-powered recommendations
-   Duplicate product detection
-   Import validation and error reporting
-   Bulk product editing
-   Product analytics
-   Role-based access control
-   Server-side Supabase sessions with `@supabase/ssr`

## Why ProductBase?

ProductBase starts as a product catalog application but is designed with
an AI/RAG-friendly foundation.

The longer-term idea is to turn structured product information into a
searchable knowledge base:

``` text
Structured Product Data
        |
        v
Searchable Catalog
        |
        v
Semantic Context
        |
        v
AI / RAG Applications
```

## License

This project is currently intended as a portfolio and learning project.
