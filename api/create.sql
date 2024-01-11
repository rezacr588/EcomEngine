
    create table cart_items (
        quantity integer not null,
        cart_id bigint not null,
        id bigserial not null,
        product_id bigint not null,
        primary key (id)
    );

    create table carts (
        id bigserial not null,
        user_id bigint unique,
        primary key (id)
    );

    create table products (
        featured boolean not null,
        price float(53) not null,
        id bigserial not null,
        description varchar(1000),
        category varchar(255),
        image_url varchar(255),
        name varchar(255) not null,
        primary key (id)
    );

    create table users (
        active boolean not null,
        created_at timestamp(6),
        date_of_birth timestamp(6),
        id bigserial not null,
        last_modified timestamp(6),
        email varchar(255) not null unique,
        first_name varchar(255),
        gender varchar(255) check (gender in ('MALE','FEMALE','OTHER','PREFER_NOT_TO_SAY')),
        last_name varchar(255),
        password varchar(255),
        phone_number varchar(255),
        reset_token varchar(255),
        username varchar(255) not null unique,
        primary key (id)
    );

    alter table if exists cart_items 
       add constraint FKpcttvuq4mxppo8sxggjtn5i2c 
       foreign key (cart_id) 
       references carts;

    alter table if exists cart_items 
       add constraint FK1re40cjegsfvw58xrkdp6bac6 
       foreign key (product_id) 
       references products;

    alter table if exists carts 
       add constraint FKb5o626f86h46m4s7ms6ginnop 
       foreign key (user_id) 
       references users;
