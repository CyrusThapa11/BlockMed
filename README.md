# React Truffle Box

This box comes with everything you need to start using Truffle to write, compile, test, and deploy smart contracts, and interact with them from a React app.

## Installation

First ensure you are in an empty directory.

Run the `unbox` command using 1 of 2 ways.

```sh
# Install Truffle globally and run `truffle unbox`
$ npm install -g truffle
$ truffle unbox react
```

```sh
# Alternatively, run `truffle unbox` via npx
$ npx truffle unbox react
```

Start the react dev server.

```sh
$ cd client
$ npm start
```

From there, follow the instructions on the hosted React app. It will walk you through using Truffle and Ganache to deploy the `SimpleStorage` contract, making calls to it, and sending transactions to change the contract's state.

## FAQ

- __How do I use this with Ganache (or any other network)?__

  The Truffle project is set to deploy to Ganache by default. If you'd like to change this, it's as easy as modifying the Truffle config file! Check out [our documentation on adding network configurations](https://trufflesuite.com/docs/truffle/reference/configuration/#networks). From there, you can run `truffle migrate` pointed to another network, restart the React dev server, and see the change take place.

- __Where can I find more resources?__

  This Box is a sweet combo of [Truffle](https://trufflesuite.com) and [Webpack](https://webpack.js.org). Either one would be a great place to start!
  
  
# BlockMED

Decentralized record-keeping systems, also known as distributed ledgers, have the potential to revolutionize many industries by providing a more secure, transparent, and efficient way to record and manage data. Here are some achievements of implementing decentralized record-keeping systems:

# Key Advanatages

Security: Decentralized record-keeping systems use advanced cryptographic algorithms to secure data, making it almost impossible for unauthorized parties to tamper with it. This makes them ideal for storing sensitive information such as medical records, financial transactions, or personal data.

Transparency: Decentralized record-keeping systems provide transparency by giving all parties access to the same data. This helps to prevent fraud and corruption as any attempts to manipulate the data will be immediately visible to all parties involved.

Privacy: Decentralized record-keeping systems allow individuals to maintain control over their personal data, and only share it when they choose to. This helps to protect their privacy and prevent the misuse of their personal information.

Efficiency: Decentralized record-keeping systems are highly efficient as they can process transactions in real-time without the need for intermediaries. This helps to streamline business processes and reduce administrative costs.



## Features

- Authentication
- Create , Read , Update , Delete of Notes and Testpapers
- Customize Notes with editor 
- Like, Save , Comment ( for discussion ) , share with specific people of notes and testpapers
- Sorting and filtering on the basis of likes , comments , username, College 


## Screenshots 

### Login/Signup page

![App Screenshot](https://res.cloudinary.com/vinsmokecyrus/image/upload/v1683600618/i1_ymg1rr.png) 

### Patient dashboard

![App Screenshot](https://res.cloudinary.com/vinsmokecyrus/image/upload/v1683600622/i22_hpokc1.png) 

### Doctor dashboard
![App Screenshot](https://res.cloudinary.com/vinsmokecyrus/image/upload/v1683600618/i23_lj6nmb.png) 

### View doctors

![App Screenshot](https://res.cloudinary.com/vinsmokecyrus/image/upload/v1683600617/i29_a4oq2d.png) 

### Book Appointment with a doctor
![App Screenshot](https://res.cloudinary.com/vinsmokecyrus/image/upload/v1683600618/i20_kpdjw0.png) 

### A Patient's all appointments

![App Screenshot](https://res.cloudinary.com/vinsmokecyrus/image/upload/v1683600619/i7_luaans.png) 

### A Doctor's all appointments
![App Screenshot](https://res.cloudinary.com/vinsmokecyrus/image/upload/v1683600620/i6_mw1qmq.png) 

### Apointment start with transaction

![App Screenshot](https://res.cloudinary.com/vinsmokecyrus/image/upload/v1683600619/i8_ootyv8.png) 

### Patient's view of appointment

![App Screenshot](https://res.cloudinary.com/vinsmokecyrus/image/upload/v1683600618/i9_s3awje.png) 

### Patient's chatting side

![App Screenshot](https://res.cloudinary.com/vinsmokecyrus/image/upload/v1683600619/i11_ophfrc.png) 

### Dcotor's chatting side

![App Screenshot](https://res.cloudinary.com/vinsmokecyrus/image/upload/v1683600618/i12_bakebx.png)

### Create record/prescription for a patient

![App Screenshot](https://res.cloudinary.com/vinsmokecyrus/image/upload/v1683600619/i13_ncxe8z.png) 

### Transaction details to store in ethereum blockchain

![App Screenshot](https://res.cloudinary.com/vinsmokecyrus/image/upload/v1683600621/i14_qkxte8.png) 

### Patient's all medical records from patient's view

![App Screenshot](https://res.cloudinary.com/vinsmokecyrus/image/upload/v1683600617/i16_zop93v.png)

### A Medical Record details  

![App Screenshot](https://res.cloudinary.com/vinsmokecyrus/image/upload/v1683600619/i17_g7lndk.png) 

### Patient's image record stored in IPFS

![App Screenshot](https://res.cloudinary.com/vinsmokecyrus/image/upload/v1683600617/i18_tlpkkk.png)

# Testing 

### User Login

![App Screenshot](https://res.cloudinary.com/vinsmokecyrus/image/upload/v1683600617/i2_mnbuoi.png)

### Invalid URL   

![App Screenshot](https://res.cloudinary.com/vinsmokecyrus/image/upload/v1683600618/i24_sbh9zl.png) 

### Reuse of an email address

![App Screenshot](https://res.cloudinary.com/vinsmokecyrus/image/upload/v1683600620/i5_yn7a5g.png)


### Incomplete credentials

![App Screenshot](https://res.cloudinary.com/vinsmokecyrus/image/upload/v1683600620/i4_yqbwvx.png)

