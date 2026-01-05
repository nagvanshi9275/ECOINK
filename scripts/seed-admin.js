const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    const email = 'admin@magricabinets.com.au';
    const password = 'secure_admin_password'; // In a real app, hash this!

    console.log('Checking for existing admin user...');

    const existingUser = await prisma.adminUser.findUnique({
        where: { email },
    });

    if (existingUser) {
        console.log('✅ Admin user already exists.');
        console.log(`Email: ${existingUser.email}`);
        console.log(`Role: ${existingUser.role}`);
        console.log(`ID: ${existingUser.id}`);
    } else {
        console.log('Creating new admin user...');
        const user = await prisma.adminUser.create({
            data: {
                email,
                password, // Reminder: Hash this in production login flow
                role: 'ADMIN',
            },
        });
        console.log('✅ Admin user created successfully.');
        console.log(`Email: ${user.email}`);
        console.log(`Role: ${user.role}`);
    }
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
