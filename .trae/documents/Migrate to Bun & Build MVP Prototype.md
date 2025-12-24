# Migration to Bun & MVP Prototype Plan

## 1. Environment Migration (Bun)

* **Action**: Switch project to use Bun (v1.2.19).

* **Steps**:

  1. Delete `package-lock.json`.
  2. Run `bun install` to generate `bun.lockb`.
  3. Update `README.md` to reflect Bun commands (`bun dev`, etc.).

## 2. UI Framework Setup (Rapid Prototyping)

* **Action**: Integrate `shadcn/ui` for high-quality, fast component development.

* **Components**: Install essential components: `Button`, `Input`, `Card`, `Select`, `Textarea`, `Label`, `Badge`, `Tabs`, `Avatar`.

* **Theme**: Setup basic clean theme suitable for a service platform.

## 3. Route Structure & Page Implementation (P0 Features)

We will implement the following structure using Next.js App Router:

### C-Side (Pet Owner)

* **`/c/pet/create`**: Pet Profile Creation

  * Form for Name, Breed, Age, Gender, Photo (mock upload), Remarks.

* **`/c/service`**: Service Selection Flow

  * Service Type (Feed/Walk), Date/Time Picker, Address Input.

* **`/c/checkout`**: Order Payment

  * Order Summary, Mock "WeChat Pay" Button.

### B-Side (Pet Sitter)

* **`/b/verify`**: Identity Verification

  * Upload ID/Face (mock), Submit.

* **`/b/orders`**: Order Management

  * List of available orders to "Accept".

  * List of active orders.

* **`/b/service/[id]`**: Service Execution

  * Status stepper: Accepted -> Arrived -> Completed.

  * Photo Upload (Watermark camera mock).

### Shared/Auth

* **`/login`**: Simple role selection (Login as Owner / Login as Sitter) for prototype navigation.

## 4. Implementation Strategy

* **Mock Data**: Use simple local state or constants to simulate database.

* **Navigation**: Link pages together to form a complete user journey for testing.

