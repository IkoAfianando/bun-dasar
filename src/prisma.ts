import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();
const contact = await prisma.contact.create({
    data: {
        name: "Iko Afianando",
        phone: "+6285606316903",
        email: "ikoafianando123@gmail.com"
    }
})

console.log(contact)
