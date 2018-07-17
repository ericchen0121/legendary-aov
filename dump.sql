--
-- PostgreSQL database dump
--

-- Dumped from database version 9.6.6
-- Dumped by pg_dump version 10.4

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: Arcana; Type: TABLE; Schema: public; Owner: ericchen0121
--

CREATE TABLE public."Arcana" (
    id integer NOT NULL,
    name character varying(255),
    tier integer
);


ALTER TABLE public."Arcana" OWNER TO ericchen0121;

--
-- Name: Build; Type: TABLE; Schema: public; Owner: ericchen0121
--

CREATE TABLE public."Build" (
    id integer NOT NULL,
    name character varying(255),
    item_1 integer,
    item_2 integer,
    item_3 integer,
    item_4 integer,
    item_5 integer,
    item_6 integer,
    item_1_alt integer[] DEFAULT ARRAY[]::integer[],
    item_2_alt integer[] DEFAULT ARRAY[]::integer[],
    item_3_alt integer[] DEFAULT ARRAY[]::integer[],
    item_4_alt integer[] DEFAULT ARRAY[]::integer[],
    item_5_alt integer[] DEFAULT ARRAY[]::integer[],
    item_6_alt integer[] DEFAULT ARRAY[]::integer[],
    talent_id integer,
    hero_id integer,
    game_mode_id integer DEFAULT 1,
    user_id integer DEFAULT 1,
    version_id integer DEFAULT 2,
    notes jsonb
);


ALTER TABLE public."Build" OWNER TO ericchen0121;

--
-- Name: Build_id_seq; Type: SEQUENCE; Schema: public; Owner: ericchen0121
--

CREATE SEQUENCE public."Build_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Build_id_seq" OWNER TO ericchen0121;

--
-- Name: Build_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: ericchen0121
--

ALTER SEQUENCE public."Build_id_seq" OWNED BY public."Build".id;


--
-- Name: GameMode; Type: TABLE; Schema: public; Owner: ericchen0121
--

CREATE TABLE public."GameMode" (
    id integer NOT NULL,
    name character varying(255)
);


ALTER TABLE public."GameMode" OWNER TO ericchen0121;

--
-- Name: GameMode_id_seq; Type: SEQUENCE; Schema: public; Owner: ericchen0121
--

CREATE SEQUENCE public."GameMode_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."GameMode_id_seq" OWNER TO ericchen0121;

--
-- Name: GameMode_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: ericchen0121
--

ALTER SEQUENCE public."GameMode_id_seq" OWNED BY public."GameMode".id;


--
-- Name: Hero; Type: TABLE; Schema: public; Owner: ericchen0121
--

CREATE TABLE public."Hero" (
    id integer NOT NULL,
    name character varying(255),
    version_id integer
);


ALTER TABLE public."Hero" OWNER TO ericchen0121;

--
-- Name: Hero_id_seq; Type: SEQUENCE; Schema: public; Owner: ericchen0121
--

CREATE SEQUENCE public."Hero_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Hero_id_seq" OWNER TO ericchen0121;

--
-- Name: Hero_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: ericchen0121
--

ALTER SEQUENCE public."Hero_id_seq" OWNED BY public."Hero".id;


--
-- Name: Item; Type: TABLE; Schema: public; Owner: ericchen0121
--

CREATE TABLE public."Item" (
    id integer NOT NULL,
    name character varying(255),
    type character varying(255),
    cost integer,
    version_id integer
);


ALTER TABLE public."Item" OWNER TO ericchen0121;

--
-- Name: Item_id_seq; Type: SEQUENCE; Schema: public; Owner: ericchen0121
--

CREATE SEQUENCE public."Item_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Item_id_seq" OWNER TO ericchen0121;

--
-- Name: Item_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: ericchen0121
--

ALTER SEQUENCE public."Item_id_seq" OWNED BY public."Item".id;


--
-- Name: Player; Type: TABLE; Schema: public; Owner: ericchen0121
--

CREATE TABLE public."Player" (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    real_name character varying(255),
    role character varying(255),
    twitter character varying(255),
    facebook character varying(255),
    youtube character varying(255),
    instagram character varying(255),
    twitch character varying(255),
    email character varying(255),
    discord character varying(255),
    garena character varying(255),
    user_id integer,
    team_id integer
);


ALTER TABLE public."Player" OWNER TO ericchen0121;

--
-- Name: Player_id_seq; Type: SEQUENCE; Schema: public; Owner: ericchen0121
--

CREATE SEQUENCE public."Player_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Player_id_seq" OWNER TO ericchen0121;

--
-- Name: Player_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: ericchen0121
--

ALTER SEQUENCE public."Player_id_seq" OWNED BY public."Player".id;


--
-- Name: SequelizeMeta; Type: TABLE; Schema: public; Owner: ericchen0121
--

CREATE TABLE public."SequelizeMeta" (
    name character varying(255) NOT NULL
);


ALTER TABLE public."SequelizeMeta" OWNER TO ericchen0121;

--
-- Name: Team; Type: TABLE; Schema: public; Owner: ericchen0121
--

CREATE TABLE public."Team" (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    alt_name character varying(255),
    url character varying(255),
    twitter character varying(255),
    facebook character varying(255),
    youtube character varying(255),
    instagram character varying(255),
    twitch character varying(255),
    email character varying(255),
    discord character varying(255),
    garena character varying(255),
    country character varying(255),
    region character varying(255),
    server character varying(255)
);


ALTER TABLE public."Team" OWNER TO ericchen0121;

--
-- Name: Team_id_seq; Type: SEQUENCE; Schema: public; Owner: ericchen0121
--

CREATE SEQUENCE public."Team_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Team_id_seq" OWNER TO ericchen0121;

--
-- Name: Team_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: ericchen0121
--

ALTER SEQUENCE public."Team_id_seq" OWNED BY public."Team".id;


--
-- Name: Tweet; Type: TABLE; Schema: public; Owner: ericchen0121
--

CREATE TABLE public."Tweet" (
    twid character varying(255) NOT NULL,
    active boolean,
    author character varying(255),
    avatar character varying(255),
    body character varying(255),
    date timestamp with time zone,
    screenname character varying(255)
);


ALTER TABLE public."Tweet" OWNER TO ericchen0121;

--
-- Name: User; Type: TABLE; Schema: public; Owner: ericchen0121
--

CREATE TABLE public."User" (
    id integer NOT NULL,
    username character varying(255),
    email character varying(255),
    email_confirmed boolean DEFAULT false,
    password character varying(255),
    last_login timestamp with time zone
);


ALTER TABLE public."User" OWNER TO ericchen0121;

--
-- Name: UserClaim; Type: TABLE; Schema: public; Owner: ericchen0121
--

CREATE TABLE public."UserClaim" (
    id integer NOT NULL,
    type character varying(255),
    value character varying(255),
    user_id integer
);


ALTER TABLE public."UserClaim" OWNER TO ericchen0121;

--
-- Name: UserClaim_id_seq; Type: SEQUENCE; Schema: public; Owner: ericchen0121
--

CREATE SEQUENCE public."UserClaim_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."UserClaim_id_seq" OWNER TO ericchen0121;

--
-- Name: UserClaim_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: ericchen0121
--

ALTER SEQUENCE public."UserClaim_id_seq" OWNED BY public."UserClaim".id;


--
-- Name: UserLogin; Type: TABLE; Schema: public; Owner: ericchen0121
--

CREATE TABLE public."UserLogin" (
    name character varying(50) NOT NULL,
    key character varying(100) NOT NULL,
    user_id integer
);


ALTER TABLE public."UserLogin" OWNER TO ericchen0121;

--
-- Name: UserProfile; Type: TABLE; Schema: public; Owner: ericchen0121
--

CREATE TABLE public."UserProfile" (
    "userId" integer NOT NULL,
    "displayName" character varying(100),
    picture character varying(255),
    gender character varying(50),
    location character varying(100),
    website character varying(255),
    user_id integer
);


ALTER TABLE public."UserProfile" OWNER TO ericchen0121;

--
-- Name: User_id_seq; Type: SEQUENCE; Schema: public; Owner: ericchen0121
--

CREATE SEQUENCE public."User_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."User_id_seq" OWNER TO ericchen0121;

--
-- Name: User_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: ericchen0121
--

ALTER SEQUENCE public."User_id_seq" OWNED BY public."User".id;


--
-- Name: Version; Type: TABLE; Schema: public; Owner: ericchen0121
--

CREATE TABLE public."Version" (
    id integer NOT NULL,
    version_number integer,
    version_date date,
    server character varying(255) DEFAULT 'NA'::character varying
);


ALTER TABLE public."Version" OWNER TO ericchen0121;

--
-- Name: Version_id_seq; Type: SEQUENCE; Schema: public; Owner: ericchen0121
--

CREATE SEQUENCE public."Version_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Version_id_seq" OWNER TO ericchen0121;

--
-- Name: Version_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: ericchen0121
--

ALTER SEQUENCE public."Version_id_seq" OWNED BY public."Version".id;


--
-- Name: Build id; Type: DEFAULT; Schema: public; Owner: ericchen0121
--

ALTER TABLE ONLY public."Build" ALTER COLUMN id SET DEFAULT nextval('public."Build_id_seq"'::regclass);


--
-- Name: GameMode id; Type: DEFAULT; Schema: public; Owner: ericchen0121
--

ALTER TABLE ONLY public."GameMode" ALTER COLUMN id SET DEFAULT nextval('public."GameMode_id_seq"'::regclass);


--
-- Name: Hero id; Type: DEFAULT; Schema: public; Owner: ericchen0121
--

ALTER TABLE ONLY public."Hero" ALTER COLUMN id SET DEFAULT nextval('public."Hero_id_seq"'::regclass);


--
-- Name: Item id; Type: DEFAULT; Schema: public; Owner: ericchen0121
--

ALTER TABLE ONLY public."Item" ALTER COLUMN id SET DEFAULT nextval('public."Item_id_seq"'::regclass);


--
-- Name: Player id; Type: DEFAULT; Schema: public; Owner: ericchen0121
--

ALTER TABLE ONLY public."Player" ALTER COLUMN id SET DEFAULT nextval('public."Player_id_seq"'::regclass);


--
-- Name: Team id; Type: DEFAULT; Schema: public; Owner: ericchen0121
--

ALTER TABLE ONLY public."Team" ALTER COLUMN id SET DEFAULT nextval('public."Team_id_seq"'::regclass);


--
-- Name: User id; Type: DEFAULT; Schema: public; Owner: ericchen0121
--

ALTER TABLE ONLY public."User" ALTER COLUMN id SET DEFAULT nextval('public."User_id_seq"'::regclass);


--
-- Name: UserClaim id; Type: DEFAULT; Schema: public; Owner: ericchen0121
--

ALTER TABLE ONLY public."UserClaim" ALTER COLUMN id SET DEFAULT nextval('public."UserClaim_id_seq"'::regclass);


--
-- Name: Version id; Type: DEFAULT; Schema: public; Owner: ericchen0121
--

ALTER TABLE ONLY public."Version" ALTER COLUMN id SET DEFAULT nextval('public."Version_id_seq"'::regclass);


--
-- Data for Name: Arcana; Type: TABLE DATA; Schema: public; Owner: ericchen0121
--

COPY public."Arcana" (id, name, tier) FROM stdin;
\.


--
-- Data for Name: Build; Type: TABLE DATA; Schema: public; Owner: ericchen0121
--

COPY public."Build" (id, name, item_1, item_2, item_3, item_4, item_5, item_6, item_1_alt, item_2_alt, item_3_alt, item_4_alt, item_5_alt, item_6_alt, talent_id, hero_id, game_mode_id, user_id, version_id, notes) FROM stdin;
1	Balanced Magic	14	33	15	13	41	24	{}	{}	{}	{}	{}	{}	9	1	1	1	3	\N
2	abrownbag Jungle	37	35	43	13	15	44	{}	{}	{}	{}	{}	{}	3	1	1	1	3	\N
3	Tanky Magic	33	15	41	42	14	13	{}	{}	{}	{}	{}	{}	9	1	1	1	3	\N
4	Durable Assassin	15	14	33	16	13	19	{}	{}	{}	{}	{}	{}	9	25	1	1	3	\N
5	Straight Down Mid	14	33	19	13	15	21	{}	{}	{}	{}	{}	{}	9	25	1	1	3	\N
6	Zelph's Lil	14	33	12	15	42	13	{}	{}	{}	{}	{}	{}	9	25	1	1	3	\N
7	ALG Rest	32	24	17	26	47	50	{}	{}	{}	{}	{}	{}	9	4	1	1	3	\N
8	SMG Genji	34	48	25	17	27	18	{}	{}	{}	{}	{}	{}	9	4	1	1	3	\N
9	SMG CK	33	24	17	47	25	48	{}	{}	{}	{}	{}	{}	9	4	1	1	3	\N
10	Tanky boi	38	33	15	43	41	25	{}	{}	{}	{}	{}	{}	3	1	1	1	3	\N
11	Slow OP	28	34	17	13	44	21	{}	{}	{}	{}	{}	{}	9	31	1	1	3	\N
12	Jungle	39	32	3	42	6	1	{}	{}	{}	{}	{}	{}	3	62	1	1	3	\N
13	ZANE Nova Jungle	38	32	11	30	42	26	{}	{}	{}	{}	{}	{}	3	22	1	1	3	\N
14	ZANE Jungle	38	33	1	30	42	26	{}	{}	{}	{}	{}	{}	3	63	1	1	3	\N
15	ZANE Jungle	39	33	1	30	4	26	{}	{}	{}	{}	{}	{}	3	43	1	1	3	\N
16	ZANE Jungle	38	36	11	3	6	45	{}	{}	{}	{}	{}	{}	3	56	1	1	3	\N
17	.__ Jungle	40	33	3	11	45	29	{}	{}	{}	{}	{}	{}	3	33	1	1	3	\N
18	.__ Jungler	51	11	6	4	8	3	{}	{}	{}	{}	{}	{}	3	52	1	1	3	\N
19	.__ DeathMatch	12	35	13	15	44	17	{}	{}	{}	{}	{}	{}	1	42	1	1	3	\N
27	JT Star (Taiwanese midlaner)	14	35	12	13	15	21	{}	{}	{}	{}	{}	{}	9	25	1	1	1	"{\\"summary\\":\\"This is J Team's midlaner JT Star and his Liliana build!\\\\n\\\\nUploaded on YT Jun 1, 2018.\\",\\"arcana\\":\\"Indomitable (AS, Max HP, Armor), Benevolence, Valiance\\",\\"items\\":\\"\\",\\"matchups\\":\\"\\",\\"combos\\":\\"\\",\\"video_url\\":\\"https://www.youtube.com/watch?v=0QYRzZVc0po\\",\\"url\\":\\"\\"}"
26	Shurko	14	33	12	53	13	15	{}	{}	{}	{}	{}	{}	9	25	1	1	1	"{\\"summary\\":\\"Shurko's Liliana mid build. He talks about it at 39m:25s\\",\\"arcana\\":\\"\\",\\"items\\":\\"Spoopy Mask -> Staff of Nuul (after Rhea's)\\",\\"matchups\\":\\"\\",\\"combos\\":\\"\\",\\"video_url\\":\\"https://www.youtube.com/watch?v=nHPsks0wPg8t=39m25s\\",\\"url\\":\\"\\"}"
30	JBeeZee	40	36	3	6	4	8	{}	{}	{}	{}	{}	{}	3	26	1	1	1	"{\\"summary\\":\\"\\",\\"arcana\\":\\"\\",\\"items\\":\\"\\",\\"matchups\\":\\"\\",\\"combos\\":\\"\\",\\"video_url\\":\\"\\",\\"url\\":\\"\\"}"
31	JBeeZee 2	40	36	3	6	4	54	{}	{}	{}	{}	{}	{}	3	26	1	1	1	"{\\"summary\\":\\"\\",\\"arcana\\":\\"\\",\\"items\\":\\"\\",\\"matchups\\":\\"\\",\\"combos\\":\\"\\",\\"video_url\\":\\"\\",\\"url\\":\\"\\"}"
32	Thai Tank	30	33	23	26	41	8	{}	{}	{}	{}	{}	{}	9	29	1	1	1	"{\\"summary\\":\\"\\",\\"arcana\\":\\"\\",\\"items\\":\\"\\",\\"matchups\\":\\"\\",\\"combos\\":\\"\\",\\"video_url\\":\\"\\",\\"url\\":\\"\\"}"
33	Immortals Dave Crit	8	33	30	3	7	41	{}	{}	{}	{}	{}	{}	1	29	1	1	1	"{\\"summary\\":\\"\\",\\"arcana\\":\\"\\",\\"items\\":\\"\\",\\"matchups\\":\\"\\",\\"combos\\":\\"\\",\\"video_url\\":\\"https://www.youtube.com/watch?v=1ZAWfZIDz6A\\",\\"url\\":\\"\\"}"
34	Airi Build	22	33	30	11	26	8	{}	{}	{}	{}	{}	{}	2	2	1	1	1	"{\\"summary\\":\\"\\",\\"arcana\\":\\"\\",\\"items\\":\\"\\",\\"matchups\\":\\"\\",\\"combos\\":\\"\\",\\"video_url\\":\\"\\",\\"url\\":\\"\\"}"
35	Shurko	51	23	25	50	55	41	{}	{}	{}	{}	{}	{}	1	16	1	1	1	"{\\"summary\\":\\"For the Dream's Shurko build\\",\\"arcana\\":\\"Indomitable > Benevolence > Valiance\\",\\"items\\":\\"\\",\\"matchups\\":\\"\\",\\"combos\\":\\"\\",\\"video_url\\":\\"https://www.youtube.com/watch?v=lamHSnr2Zlg\\",\\"url\\":\\"\\"}"
36	Taipei Star	14	35	13	47	44	15	{}	{}	{}	{}	{}	{}	9	25	1	1	1	"{\\"summary\\":\\"\\",\\"arcana\\":\\"\\",\\"items\\":\\"\\",\\"matchups\\":\\"\\",\\"combos\\":\\"\\",\\"video_url\\":\\"https://www.youtube.com/watch?v=9i9IFidfPUo&t=1131s\\",\\"url\\":\\"\\"}"
37	Korea's Chaser	32	23	30	26	25	56	{}	{}	{}	{}	{}	{}	5	29	1	1	1	"{\\"summary\\":\\"In Taipei vs Korea World Cup Bootcamp 2018, KR.Chaser used this build in Game 3 (timestamp is 1:42:14 in the yt video)\\",\\"arcana\\":\\"\\",\\"items\\":\\"He didn't finish his last two items, but they were Belt of Clarity (which only leads to Gaia's) and Necklace of Vitality (which only leads to Odin's Will)\\",\\"matchups\\":\\"\\",\\"combos\\":\\"\\",\\"video_url\\":\\"https://www.youtube.com/watch?v=9i9IFidfPUo&t=1131s\\",\\"url\\":\\"\\"}"
28	Zelph Poke	52	35	12	17	15	13	{}	{}	{}	{}	{}	{}	9	23	1	5	1	"{\\"summary\\":\\"July 4, 2018 Twitch Stream\\",\\"arcana\\":\\"\\",\\"items\\":\\"\\",\\"matchups\\":\\"\\",\\"combos\\":\\"\\",\\"video_url\\":\\"\\",\\"url\\":\\"\\"}"
29	Zelph Jungle	40	36	11	3	6	4	{}	{}	{}	{}	{}	{}	3	26	1	5	1	"{\\"summary\\":\\"\\",\\"arcana\\":\\"Zelph recommends for noobs, two pages of arcana.\\\\n\\\\n1 Atrocity / Onslaught > Guerilla or Assassinate > Skewer\\\\n\\\\nSecond page (for mages I believe):\\\\nViolate > Benevolence > Flurry\\",\\"items\\":\\"\\",\\"matchups\\":\\"\\",\\"combos\\":\\"\\",\\"video_url\\":\\"\\",\\"url\\":\\"\\"}"
38	Simjo Jungle	39	36	11	5	6	8	{}	{}	{}	{}	{}	{}	3	66	1	1	1	"{\\"summary\\":\\"Simjo's jungle build on 7/9/2018\\",\\"arcana\\":\\"\\",\\"items\\":\\"\\",\\"matchups\\":\\"\\",\\"combos\\":\\"\\",\\"video_url\\":\\"https://www.youtube.com/watch?v=JwGxO6lfKfY&t=\\",\\"url\\":\\"\\"}"
39	SG Bruise Assassin	1	33	22	30	26	8	{}	{}	{}	{}	{}	{}	9	2	1	1	1	"{\\"summary\\":\\"\\\\\\"Airi is most capable in the dark slayer lane and should build like a bruiser when doing so. We tried to reflect this in this collection of combination items, giving Airi a number of both offensive and defensive bonuses. Spear of Longinus, Mantle of Ra, and Frost Cape all help Airi in both regards, keeping her blades sharp and her skin tough. The balance is maintained in the pure items as well, we taking a single defensive and a single offensive item to finish the build off. These are both powerhouses, however, Medallion of Troy offering an immense amount of defensive power against mages and Fenrir’s Tooth granting a large amount of firepower, particularly when finishing enemies off.\\\\\\"  -- Samurai Gamers\\",\\"arcana\\":\\"\\",\\"items\\":\\"\\",\\"matchups\\":\\"\\",\\"combos\\":\\"\\",\\"video_url\\":\\"\\",\\"url\\":\\"https://samurai-gamers.com/arena-of-valor/airi-item-builds/\\"}"
40	SG Aggressive Jungler	39	33	11	30	1	8	{}	{}	{}	{}	{}	{}	3	2	1	1	1	"{\\"summary\\":\\"\\\\\\"A very offensive-minded approach to the jungle, this build focuses on Airi’s firepower so that she can quickly slay anyone she comes across. She will have a dramatic amount of attack damage with heavy hitting items like Soulreaver, Rankbreaker, and Fenrir’s Tooth at her disposal. Airi will additionally have the coveted 40% CDR when building these items, allowing her maximum use of her abilities. She will need to be careful, though, as while she gains a bit of defense through Frost Cape and Spear of Longinus, she will be almost fully dependant on her mobility to stay alive in fights.\\\\\\" -- Samurai Gamers\\",\\"arcana\\":\\"\\",\\"items\\":\\"\\",\\"matchups\\":\\"\\",\\"combos\\":\\"\\",\\"video_url\\":\\"\\",\\"url\\":\\"https://samurai-gamers.com/arena-of-valor/airi-item-builds/\\"}"
41	SG Durable Jungler	38	33	22	30	1	26	{}	{}	{}	{}	{}	{}	3	2	1	1	1	"{\\"summary\\":\\"\\\\\\"In contrast to the other jungle build, this one turns Airi into a rather durable bruiser. The double burn from Leviathan and Mantle of Ra is always welcome, causing enemies to get all hot and bothered whenever the graceful assassin gets too close, the pervy chumps. Spear of Longinus, Frost Cape, and Mantle of Ra each offer some defensive benefits along with their offensive boons, mostly by way of armor. As her main concern when zipping up close to enemy heroes would be the warriors who can withstand her damage and dish out their own, armor is one of the most valuable things that she can get defensively. Medallion of Troy finishes the build off by keeping the ninja from being overly vulnerable to mages.\\\\\\" -- Samurai Gamers\\",\\"arcana\\":\\"\\",\\"items\\":\\"\\",\\"matchups\\":\\"\\",\\"combos\\":\\"\\",\\"video_url\\":\\"\\",\\"url\\":\\"https://samurai-gamers.com/arena-of-valor/airi-item-builds/\\"}"
42	SG Durable Jungler	38	33	22	30	1	26	{}	{}	{}	{}	{}	{}	3	2	1	1	1	"{\\"summary\\":\\"\\\\\\"In contrast to the other jungle build, this one turns Airi into a rather durable bruiser. The double burn from Leviathan and Mantle of Ra is always welcome, causing enemies to get all hot and bothered whenever the graceful assassin gets too close, the pervy chumps. Spear of Longinus, Frost Cape, and Mantle of Ra each offer some defensive benefits along with their offensive boons, mostly by way of armor. As her main concern when zipping up close to enemy heroes would be the warriors who can withstand her damage and dish out their own, armor is one of the most valuable things that she can get defensively. Medallion of Troy finishes the build off by keeping the ninja from being overly vulnerable to mages.\\\\\\" -- Samurai Gamers\\",\\"arcana\\":\\"\\",\\"items\\":\\"\\",\\"matchups\\":\\"\\",\\"combos\\":\\"\\",\\"video_url\\":\\"\\",\\"url\\":\\"https://samurai-gamers.com/arena-of-valor/airi-item-builds/\\"}"
43	SG Magic Pierce	14	35	13	44	20	21	{}	{}	{}	{}	{}	{}	9	3	1	1	1	"{\\"summary\\":\\"\\\\\\"Here we focus completely on ripping through enemy magic defenses to hit their health directly. Even the tankiest of enemies will have a hard time getting out of Aleisters spells and traps. Should they start building health, Berith’s Agony makes a good way to avoid being countered.\\\\\\" -Samurai Gamers\\",\\"arcana\\":\\"\\",\\"items\\":\\"\\",\\"matchups\\":\\"\\",\\"combos\\":\\"\\",\\"video_url\\":\\"\\",\\"url\\":\\"https://samurai-gamers.com/arena-of-valor/aleister-item-builds/\\"}"
44	SG Durable Caster	14	33	17	13	18	21	{}	{}	{}	{}	{}	{}	9	3	1	1	1	"{\\"summary\\":\\"\\\\\\"The majority of items here offer significant defensive bonuses along with the ability power that Aleister is usually after. Aleister’s biggest weakness is a lack of mobility or way to defend himself from enemies that get up next to him, so items like Berith’s Agony, Frosty’s Revenge, and Holy of Holies will give him some extra durability, while Frosty’s Revenge will also give the caster some additional movement speed.\\\\\\" -Samurai Gamers\\",\\"arcana\\":\\"\\",\\"items\\":\\"\\",\\"matchups\\":\\"\\",\\"combos\\":\\"\\",\\"video_url\\":\\"\\",\\"url\\":\\"https://samurai-gamers.com/arena-of-valor/aleister-item-builds/\\"}"
45	SG Max CDR	14	34	18	13	15	21	{}	{}	{}	{}	{}	{}	9	3	1	1	1	"{\\"summary\\":\\"\\\\\\"Here we sacrifice some utility in the name of hitting the maximum of 40% CDR. Aleister will be able to throw out spells as fast as possible and thereby constantly trap enemies for his allies. Rhea’s Blessing, Holy of Holies, and Berith’s Agony all assist in keeping the mage alive as well, keeping Aleister from being completely made of glass.\\\\\\" -Samurai Gamers\\",\\"arcana\\":\\"\\",\\"items\\":\\"\\",\\"matchups\\":\\"\\",\\"combos\\":\\"\\",\\"video_url\\":\\"\\",\\"url\\":\\"https://samurai-gamers.com/arena-of-valor/aleister-item-builds/\\"}"
46	SG Support Aura	50	33	24	17	20	23	{}	{}	{}	{}	{}	{}	9	4	1	1	1	"{\\"summary\\":\\"\\\\\\"This build puts an emphasis on disrupting enemies during team fights. Asterion’s Buckler, Soaring Aura, and Shield of the Lost provide auras that either buff teammates or weaken enemy heroes. This is more of a team-oriented build and is intended for supports who want to provide a clear advantage to allies in mid to late game clashes.\\\\\\" -Samurai Gamers\\",\\"arcana\\":\\"\\",\\"items\\":\\"\\",\\"matchups\\":\\"\\",\\"combos\\":\\"\\",\\"video_url\\":\\"\\",\\"url\\":\\"https://samurai-gamers.com/arena-of-valor/alice-item-builds/\\"}"
47	SG Defensive Support	14	33	17	17	23	24	{}	{}	{}	{}	{}	{}	9	4	1	1	1	"{\\"summary\\":\\"\\\\\\"This build hardens Alice to outside damage to ensure she survives fights and can control enemies as much as possible. With large amounts of health and armor, Alice will be able to withstand a lot of damage before falling, particularly from marksmen and assassins. As such, she will be able to stick around the front lines instead of falling to the back, affecting enemies with Shield of the Lost’s aura and allies with that of Asterion’s Buckler. Orb of the Magi is a good way to get a little extra cooldown reduction along with sizable ability power and health bonuses, however many prefer rushing towards the later items in the build. In these cases, simply building Phoenix Tear is a fine alternative to Orb of the Magi.\\\\\\" -Samurai Gamers\\",\\"arcana\\":\\"\\",\\"items\\":\\"\\",\\"matchups\\":\\"\\",\\"combos\\":\\"\\",\\"video_url\\":\\"\\",\\"url\\":\\"https://samurai-gamers.com/arena-of-valor/alice-item-builds/\\"}"
48	Alice Build	14	35	24	17	30	21	{}	{}	{}	{}	{}	{}	9	4	1	1	1	"{\\"summary\\":\\"\\\\\\"Here we improve Alice’s impact with additional ability power. While far from being able to carry games with her damage, the damage that she does offer can give her allies an edge in battle. Her shields will also block for more damage as she gains more ability power, furthering her support potential. Frost Cape and Frosty’s Revenge will stack as she controls her opponents, slowing them down to a crawl. Despite this rather offensive focus, Alice will be able to take quite a bit of damage as well. Each of the items offer some sort of defensive boost, giving Alice a lot of survivability to work with.\\\\\\" - Samurai Gamers\\",\\"arcana\\":\\"\\",\\"items\\":\\"\\",\\"matchups\\":\\"\\",\\"combos\\":\\"\\",\\"video_url\\":\\"\\",\\"url\\":\\"https://samurai-gamers.com/arena-of-valor/alice-item-builds/\\"}"
49	SG Tank Bruiser	30	33	41	1	22	29	{}	{}	{}	{}	{}	{}	9	5	1	1	1	"{\\"summary\\":\\"\\\\\\"This build focuses on his capabilities of being both a tank and a bruiser. Gilded Greaves and Mail of Pain together make him tanky enough to take enemy attacks and spells for his team. Adding in Spear of Longinus and Mantle of Ra give his attacks some extra power without sacrifice to his durability. Ancestral Glory finishes the build, keeping him in fights even after death.\\\\\\" -Samurai Gamers\\",\\"arcana\\":\\"\\",\\"items\\":\\"\\",\\"matchups\\":\\"\\",\\"combos\\":\\"\\",\\"video_url\\":\\"\\",\\"url\\":\\"https://samurai-gamers.com/arena-of-valor/arduin-item-builds/\\"}"
50	SG Tank	22	33	30	41	26	31	{}	{}	{}	{}	{}	{}	9	5	1	1	1	"{\\"summary\\":\\"\\\\\\"This build eases away from bruising and turns Arduin more into a pure tank. It is not completely without damage, Frost Cape and Mantle of Ra still providing their offensive bonuses.Amulet of Longevity and Medallion of Troy pump up the warrior’s health and, in turn, the strength of his shield. Using these items, Arduin will be able to withstand enemy fire without much fear of dying to their harassment.\\\\\\" -Samurai Gamers\\",\\"arcana\\":\\"\\",\\"items\\":\\"\\",\\"matchups\\":\\"\\",\\"combos\\":\\"\\",\\"video_url\\":\\"\\",\\"url\\":\\"https://samurai-gamers.com/arena-of-valor/arduin-item-builds/\\"}"
51	SG Jungle / Tank	38	33	30	26	41	29	{}	{}	{}	{}	{}	{}	9	5	1	1	1	"{\\"summary\\":\\"\\\\\\"Not the fastest at clearing lanes, but Arduin’s abilities make him an adequate ganker and thereby a jungling candidate. Due to his abilities’ base damage, he can focus on building up tank items to improve his team’s front lines. He will start out ganking lanes with his ultimate while keeping the prey in place with Rend. As the game moves on, Arduin will have to shift into acting purely as a bruiser to maintain relevance in fights.\\\\\\" -Samurai Gamers\\",\\"arcana\\":\\"\\",\\"items\\":\\"\\",\\"matchups\\":\\"\\",\\"combos\\":\\"\\",\\"video_url\\":\\"\\",\\"url\\":\\"https://samurai-gamers.com/arena-of-valor/arduin-item-builds/\\"}"
52	SG Bruiser	22	33	28	30	25	29	{}	{}	{}	{}	{}	{}	9	6	1	1	1	"{\\"summary\\":\\"\\\\\\"Arthur’s bruiser build allows him to soak damage while dealing his own out. This build is a mix of offensive and defensive items, Arthur able to benefit from both in great amounts. He will be able to quickly enter team fights and cut through his enemies. He will also be a huge threat to squishy heroes, easily able to finish them off with his combo.\\\\\\" - Samurai Gamers\\",\\"arcana\\":\\"\\",\\"items\\":\\"\\",\\"matchups\\":\\"\\",\\"combos\\":\\"\\",\\"video_url\\":\\"\\",\\"url\\":\\"https://samurai-gamers.com/arena-of-valor/arthur-item-builds/\\"}"
53	SG Tank	22	33	25	30	26	31	{}	{}	{}	{}	{}	{}	9	6	1	1	1	"{\\"summary\\":\\"\\\\\\"The tank build is for when your team is a bit heavy with squishy damage dealers and low on tanks. Using this, Arthur can run into enemy teams and absorb fire while his allies attack. He won’t be able to dish out the heaviest amounts of damage, but will still be able do contribute a little through their base damages.\\\\\\" - Samurai Gamers\\",\\"arcana\\":\\"\\",\\"items\\":\\"\\",\\"matchups\\":\\"\\",\\"combos\\":\\"\\",\\"video_url\\":\\"\\",\\"url\\":\\"https://samurai-gamers.com/arena-of-valor/arthur-item-builds/\\"}"
54	SG Durable DPS	22	33	1	30	41	8	{}	{}	{}	{}	{}	{}	9	6	1	1	1	"{\\"summary\\":\\"\\\\\\"Here we lean more towards making Arthur a damage dealer with fewer defense items than in other builds. He is far from squishy, though, as a majority of the items additionally harden his skin to damage. It should be noted that it is a bit lacking on magic defense. If the enemy team has a particularly troublesome mage, switching out Mail of Pain for either Uriel’s Brand or Gaia’s Standard is advised.\\\\\\" -Samurai Gamers\\",\\"arcana\\":\\"\\",\\"items\\":\\"\\",\\"matchups\\":\\"\\",\\"combos\\":\\"\\",\\"video_url\\":\\"\\",\\"url\\":\\"https://samurai-gamers.com/arena-of-valor/arthur-item-builds/\\"}"
55	SG Durable Bruiser	11	32	22	30	42	26	{}	{}	{}	{}	{}	{}	9	7	1	1	1	"{\\"summary\\":\\"\\\\\\"This build revolves around making Astrid a formidable front liner. A majority of the items here offer both offensive and defensive stats, Mantle of Ra, Frost Cape, and Hercules’ Madness all offering aggressive passive effects as well. Rankbreaker stands as the only purely offensive item, but the amount it offers Astrid is too good to pass up. On the other side of the spectrum, Medallion of Troy helps Astrid with magic defense as the only purely defensive item in the build.\\\\\\" -Samurai Gamers\\",\\"arcana\\":\\"\\",\\"items\\":\\"\\",\\"matchups\\":\\"\\",\\"combos\\":\\"\\",\\"video_url\\":\\"\\",\\"url\\":\\"https://samurai-gamers.com/arena-of-valor/astrid-item-builds/\\"}"
57	SG Full HAM	11	36	2	6	1	8	{}	{}	{}	{}	{}	{}	9	7	1	1	1	"{\\"summary\\":\\"\\\\\\"Through defense to the wayside and show off why Astrid is the Indomitable. Your attacks will explode with a righteous fury as you rush your enemies with a Fearless Charge. The attack speed will have her shield up much more frequently and the attack damage will turn it into a considerable wall of muscle. To finish it off, Dire Blow will absolutely destroy squishy units, taking huge swaths out of tanks’ health as well. Just try not to get with disables; that’d be bad.\\\\\\" -Samurai Gamers\\",\\"arcana\\":\\"\\",\\"items\\":\\"\\",\\"matchups\\":\\"\\",\\"combos\\":\\"\\",\\"video_url\\":\\"\\",\\"url\\":\\"https://samurai-gamers.com/arena-of-valor/astrid-item-builds/\\"}"
58	SG Brawling Beasts	14	33	24	17	25	31	{}	{}	{}	{}	{}	{}	9	67	1	1	1	"{\\"summary\\":\\"\\\\\\"This hybrid build provides Arum with damage, sustain, and utility all in one package. Orb of the Magi brings ability power and HP, which Arum loves. Arum needs all the mobility she can get, so Gilded Greaves reduces any CC that gets in her way, while Frosty’s Revenge gives a nice 7% boost to her movement speed. The Aegis and Frosty’s Revenge don’t provide her any HP, but the utility they offer in slowing the enemy is crucial for getting the most out of Arum’s kit. Gaia’s is there for a bit more healing, making Arum even harder to kill, while Amulet of Longevity synergizes with Ravenous Beasts in multiple ways.\\\\\\" -Samurai Gamers\\",\\"arcana\\":\\"\\",\\"items\\":\\"\\",\\"matchups\\":\\"\\",\\"combos\\":\\"\\",\\"video_url\\":\\"\\",\\"url\\":\\"https://samurai-gamers.com/arena-of-valor/arum-item-builds/\\"}"
59	SG The Immortal Conjurer	49	33	25	41	55	31	{}	{}	{}	{}	{}	{}	9	67	1	1	1	"{\\"summary\\":\\"\\\\\\"This build throws utility to the wind (mostly) and instead focuses on being as un-killable as possible. With tons of armor, magic defense, and HP, as well as a panic button in Rock Shield, Arum can take on the entire opposing team and it would take nearly a minute to take her down. Get in the middle of team fights and mess with their targeting, or Snare someone for your team without being afraid of taking any amount of damage. Being hard to take down can be nice for split-pushing as well, as sending one hero to deal with you will result in death via Snare under tower – and if multiple heroes come, it opens up the map for your teammates to get objectives.\\\\n\\\\nNote: upgrade Knight’s Plate to Shield of the Lost between getting Greaves of Protection and Amulet of Longevity as your 6th item.\\\\\\" -Samurai Gamers\\",\\"arcana\\":\\"\\",\\"items\\":\\"\\",\\"matchups\\":\\"\\",\\"combos\\":\\"\\",\\"video_url\\":\\"\\",\\"url\\":\\"https://samurai-gamers.com/arena-of-valor/arum-item-builds/\\"}"
61	SG Jungle DPS	40	32	28	2	41	42	{}	{}	{}	{}	{}	{}	3	21	1	1	1	"{\\"summary\\":\\"\\\\\\"This build focuses around strengthening Kil’groth’s damage while also giving him a bit of survivability. Scorching Wind and Fafnir’s Talon give him fantastic amounts of attack speed on their own, Hercules Madness joining in when his health falls low. Hyoga’s Edge will keep him within range of his target and toughens his skin along with Mail of Pain and Hercules’ Madness.\\\\\\" -Samurai Gamers\\",\\"arcana\\":\\"\\",\\"items\\":\\"\\",\\"matchups\\":\\"\\",\\"combos\\":\\"\\",\\"video_url\\":\\"\\",\\"url\\":\\"https://samurai-gamers.com/arena-of-valor/kilgroth-item-builds/\\"}"
62	SG Tanky Bruiser	2	33	28	1	30	26	{}	{}	{}	{}	{}	{}	1	21	1	1	1	"{\\"summary\\":\\"\\\\\\"Here we take Kil’groth out of the jungle and into the top lane. We rely on Fafnir’s Talon almost completely for damage here, Spear of Longinus the only other pick that grants any source of attack damage. The passive armor rip from Longinus as well as the burst damage whenever Frost Cape activates should give him a bit of extra bite as well. On the other side of the spectrum, Medallion of Troy, Frost Cape, and Hyoga’s Edge will make Kil’groth rather hard to kill. He won’t be able to burst people down as well with this build, but he will be able to stick to and tear down enemies over time exceptionally well.\\\\\\" -Samurai Gamers\\",\\"arcana\\":\\"\\",\\"items\\":\\"\\",\\"matchups\\":\\"\\",\\"combos\\":\\"\\",\\"video_url\\":\\"\\",\\"url\\":\\"https://samurai-gamers.com/arena-of-valor/kilgroth-item-builds/\\"}"
63	SG Berserker	2	33	28	9	42	8	{}	{}	{}	{}	{}	{}	9	21	1	1	1	"{\\"summary\\":\\"\\\\\\"Throwing caution to the wind, this build focuses almost entirely on Kil’groth’s lethality. Hyoga’s Edge and Hercules’ Madness keep him from being a complete glass cannon, however he will have a much harder time dealing with enemy fire than he would with other builds. If his enemies can survive him, that is. His attack speed and damage will be immense with these items. Towers and heroes alike will quickly fall once Kil’groth starts his terrifying onslaught. While he lacks direct defense stats her, Fafnir’s Talon and Blitz Blade will provide decent amounts of lifesteal, thereby allowing the freaky fish guy to quickly restore any health that he loses.\\\\\\" - Samurai Gamers\\",\\"arcana\\":\\"\\",\\"items\\":\\"\\",\\"matchups\\":\\"\\",\\"combos\\":\\"\\",\\"video_url\\":\\"\\",\\"url\\":\\"https://samurai-gamers.com/arena-of-valor/kilgroth-item-builds/\\"}"
64	SG Mage Support	14	35	17	12	13	21	{}	{}	{}	{}	{}	{}	9	23	1	1	1	"{\\"summary\\":\\"\\\\\\"Here we focus primarily on making Krixi’s abilities as powerful as possible. Boomstick, Hecate’s Diadem, and Holy of Holies will bring her total ability power up to insane levels. Her abilities will ravage enemies caught by them, turning the pixie into an engine of destruction. The main deviation from damage is Frosty’s Revenge, which doesn’t offer as much damage as other options. The speed and slow that it offers more than make up for that, however, they allowing Krixie to flit around enemies bogged down with control effects.\\\\\\" - Samurai Gamers\\",\\"arcana\\":\\"\\",\\"items\\":\\"\\",\\"matchups\\":\\"\\",\\"combos\\":\\"\\",\\"video_url\\":\\"\\",\\"url\\":\\"https://samurai-gamers.com/arena-of-valor/krixi-item-builds/\\"}"
65	SG CDR Utility	14	34	17	13	44	15	{}	{}	{}	{}	{}	{}	9	23	1	1	1	"{\\"summary\\":\\"\\\\\\"Rather than focus on dealing damage, this build tries to grant Krixi large amounts of cooldown reduction so that she can regularly cast her spells and control the battlefield. Orb of the Magi, Flashy Boots, Staff of Nuul, and Rhea’s Blessing bring her up to the maximum of 40% cooldown reduction. She will be able to throw out her spells very regularly and constantly benefit from her passive’s movement speed boost. Frosty’s Revenge will help her control with its slow, also pumping up her movement speed further. While not packing the same punch as focusing on damage, Krixi will still be able to chip away at enemy health as she slows them and knocks them into the air.\\\\\\" -Samurai Gamers\\",\\"arcana\\":\\"\\",\\"items\\":\\"\\",\\"matchups\\":\\"\\",\\"combos\\":\\"\\",\\"video_url\\":\\"\\",\\"url\\":\\"https://samurai-gamers.com/arena-of-valor/krixi-item-builds/\\"}"
66	SG Full Magic Pierce	14	35	13	44	20	21	{}	{}	{}	{}	{}	{}	9	23	1	1	1	"{\\"summary\\":\\"\\\\\\"Enemies are building up large amounts of magic defense and need to be dealt with? This build will shatter even the heartiest of defenses to attack at the hero hiding behind them. Mixed together, the items provide 300 + 40% enemy magic resist pierce, making Krixi’s abilities next to impossible to block. Her high movement speed will make it hard to dodge the pixie as well, making large amounts of sustained damage easy.\\\\\\" -Samurai Gamers\\",\\"arcana\\":\\"\\",\\"items\\":\\"\\",\\"matchups\\":\\"\\",\\"combos\\":\\"\\",\\"video_url\\":\\"\\",\\"url\\":\\"https://samurai-gamers.com/arena-of-valor/krixi-item-builds/\\"}"
67	SG Bruiser	22	33	30	23	26	8	{}	{}	{}	{}	{}	{}	9	29	1	1	1	"{\\"summary\\":\\"\\\\\\"We build Maloch here as a damage-dealing off tank who dives into the enemy team to do as much damage as he can. Shield of the Lost, Frost Cape, and Medallion of Troy will keep him up and fighting despite enemy counter fire while Mantle of Ra and Fenrir’s Tooth will give him the muscle he needs to really damage any he get too close to him.\\\\\\" -Samurai Gamers\\",\\"arcana\\":\\"\\",\\"items\\":\\"\\",\\"matchups\\":\\"\\",\\"combos\\":\\"\\",\\"video_url\\":\\"\\",\\"url\\":\\"https://samurai-gamers.com/arena-of-valor/maloch-item-builds/\\"}"
68	SG Destruction  Engine DPS	22	33	6	28	42	8	{}	{}	{}	{}	{}	{}	9	29	1	1	1	"{\\"summary\\":\\"\\\\\\"This build goes in the opposite direction of the former, doubling down on Maloch’s damage. He still maintains some sources of health and defense, Hyoga’s Edge and Mercules’ Madness the most notable examples. However, the demon will be doing a lot of battling than tanking when taking this build, cleaving off large swaths of the enemies’ health with each swing of his might sword. Following up with a normal attack will now add to his burst as well, Omni Arms sacrificing the utility of Frost Cape for a significant upgrade in damage.\\\\\\" - Samurai Gamers\\",\\"arcana\\":\\"\\",\\"items\\":\\"\\",\\"matchups\\":\\"\\",\\"combos\\":\\"\\",\\"video_url\\":\\"\\",\\"url\\":\\"https://samurai-gamers.com/arena-of-valor/maloch-item-builds/\\"}"
69	SG Tank	22	33	28	30	23	31	{}	{}	{}	{}	{}	{}	9	29	1	1	1	"{\\"summary\\":\\"\\\\\\"This build leans completely into his tanky side, making Maloch into a damage sponge. He offers some utility through Hyoga’s Edge and Frost Cape to stay relevant in fights, and Mantle of Raw will add to his true damage as to keep him doing at least a little damage in fights. Otherwise, all the other items present are fully geared towards keeping Maloch alive and soaking damage for his team.\\\\\\" -Samurai Gamers\\",\\"arcana\\":\\"\\",\\"items\\":\\"\\",\\"matchups\\":\\"\\",\\"combos\\":\\"\\",\\"video_url\\":\\"\\",\\"url\\":\\"https://samurai-gamers.com/arena-of-valor/maloch-item-builds/\\"}"
71	SG Pure Damage (Dragon Lane)	2	33	6	3	7	4	{}	{}	{}	{}	{}	{}	9	26	1	1	1	"{\\"summary\\":\\"\\\\\\"Here we set Lindis up to farm the Abyssal Dragon lane rather than the jungle. She will be more limited here given the lower amount of brush to take advantage of, but will still be able to reach a power spike after a bit of farming. The main difference here is the replacement of Scorching Wind with Fafnir’s Talon. Her ability to chain out a large burst of normal attacks makes her a great wielder of the item and able to shred down opponents’ health. For this same reason we include Omni Arms, the stats and passive meshing will with her kit. Claves Sancti and Slikk’s Sting work so well together it is hard to get one without the other, however these are the most flexible items in the build. Someone might want Fenrir’s Tooth for more dramatic finishing potential or Ancestral Guardian for more defense. When buy such expensive items, however, they should be taken after items with more reasonable prices like Muramasa.\\\\\\" -Samurai Gamers\\",\\"arcana\\":\\"\\",\\"items\\":\\"\\",\\"matchups\\":\\"\\",\\"combos\\":\\"\\",\\"video_url\\":\\"\\",\\"url\\":\\"https://samurai-gamers.com/arena-of-valor/lindis-item-builds/\\"}"
72	SG AD Jungler	39	36	11	6	3	7	{}	{}	{}	{}	{}	{}	3	26	1	1	1	"{\\"summary\\":\\"\\\\\\"Here we rely less on speed and the proccing of Piercing Gaze, but instead on raw damage to increase the lethality of each individual attack. This is most directly characterised in the replaceall of Scorching Wind with Soulreaver, Lindis now gaining attack damage with each beast she slays rather than attack speed. This isn’t to say that her attacks will be coming slowly. Slikk’s Sting, War Boots, and Omni Arms all give her bonuses to ensure that her attacks continue to spray out at a regular rate. This build provides players with a much easier time poking enemies at the expense of a few nice on-hit effects that are exploited in more speed centric builds.\\\\\\" -Samurai Gamers\\",\\"arcana\\":\\"\\",\\"items\\":\\"\\",\\"matchups\\":\\"\\",\\"combos\\":\\"\\",\\"video_url\\":\\"\\",\\"url\\":\\"https://samurai-gamers.com/arena-of-valor/lindis-item-builds/\\"}"
70	SG Attack Speed Jungle	40	36	2	6	7	11	{}	{}	{}	{}	{}	{}	3	26	1	1	1	"{\\"summary\\":\\"\\\\\\"While lacking some of the damage that an attack damage build would provide, this build gives Lindis the speed to smash enemies with a stream of normal attacks while constantly proccing the extra damage from Piercing Gaze. Each item outside Rankbreaker buffs up her attack speed in some way along with their other damage benefits. Rankbreaker and Slikk’s Sting increase her already impressive movement speed even further, allowing Lindis to sprint around the battlefield without breaking a sweat.\\\\\\" -Samurai Gamers\\",\\"arcana\\":\\"\\",\\"items\\":\\"\\",\\"matchups\\":\\"\\",\\"combos\\":\\"\\",\\"video_url\\":\\"\\",\\"url\\":\\"https://samurai-gamers.com/arena-of-valor/lindis-item-builds/\\"}"
60	SG I Just Want a Hug	38	33	24	17	30	28	{}	{}	{}	{}	{}	{}	9	67	1	1	1	"{\\"summary\\":\\"\\\\\\"For Arum’s jungle build, we have a little fun and equip every item that either boosts Arum’s speed or slows her opponents (well, other than Leviathan). Let’s count the ways: 1) Damaging Arum will slow the attacker by 15% (The Aegis), 2) Getting hit by any ability – including Arum’s passive – will slow the receiver by 25%, while Arum permanently moves 7% faster (Frosty’s Revenge), 3) Attacks will slow the attacked by 25% and speed Arum by 10% (Hyoga’s Edge), and 4) Any attack after an ability will slow them by 55% (Frost Cape + Hyoga’s Edge). In other words, every interaction with Arum will leave her enemies slowed, letting her death-hug her enemies with her beasts and Flame Magic (Leviathan). And lest you try to CC her, Gilded Greaves will ensure she keeps coming at you like a monster in a horror movie.\\\\\\" -Samurai Gamers\\",\\"arcana\\":\\"\\",\\"items\\":\\"\\",\\"matchups\\":\\"\\",\\"combos\\":\\"\\",\\"video_url\\":\\"\\",\\"url\\":\\"https://samurai-gamers.com/arena-of-valor/arum-item-builds/\\"}"
56	SG Aggressive Warrior	11	33	22	30	7	8	{}	{}	{}	{}	{}	{}	9	7	1	1	1	"{\\"summary\\":\\"\\\\\\"Astrid benefits quite a bit from large amounts of attack damage, so this build is focused on giving her as much as possible while remaining a bit durable. The only item that does not raiser her attack damage in some way is Frost Cape, however the slow it provides is a very useful tool in sticking close to enemies. When outfit with these items, Astrid will need to play much more aggressively than otherwise, constantly trading with the enemy to chip away at their health.\\\\\\" -Samurai Gamers\\",\\"arcana\\":\\"\\",\\"items\\":\\"\\",\\"matchups\\":\\"\\",\\"combos\\":\\"\\",\\"video_url\\":\\"\\",\\"url\\":\\"https://samurai-gamers.com/arena-of-valor/astrid-item-builds/\\"}"
74	Darkbreaker Solo/DS lane	33	14	24	25	17	31	{}	{}	{}	{}	{}	{}	9	67	1	6	3	"{\\"summary\\":\\"Darkbreaker pro build\\",\\"arcana\\":\\"Indomitable | Benevolence | Valiance\\",\\"items\\":\\"\\",\\"matchups\\":\\"\\",\\"combos\\":\\"\\",\\"video_url\\":\\"https://www.youtube.com/watch?v=dI-URoSniro\\",\\"url\\":\\"\\"}"
75	Darkbreaker Lane/Jungle	38	32	25	17	24	18	{}	{}	{}	{}	{}	{}	3	67	1	6	3	"{\\"summary\\":\\"\\",\\"arcana\\":\\"\\",\\"items\\":\\"Indomitable | Benevolence | Valiance\\",\\"matchups\\":\\"\\",\\"combos\\":\\"\\",\\"video_url\\":\\"https://www.youtube.com/watch?v=dI-URoSniro\\",\\"url\\":\\"\\"}"
76	Darkbreaker Jungle OP	38	36	5	4	6	26	{}	{}	{}	{}	{}	{}	3	66	1	6	3	"{\\"summary\\":\\"\\",\\"arcana\\":\\"\\",\\"items\\":\\"\\",\\"matchups\\":\\"\\",\\"combos\\":\\"\\",\\"video_url\\":\\"\\",\\"url\\":\\"https://www.clipzui.com/video/w3q3y4h4p4y4e3h4d4y3q3.html\\"}"
77	Darkbreaker OP	39	36	11	6	4	8	{}	{}	{}	{}	{}	{}	3	34	1	6	3	"{\\"summary\\":\\"\\",\\"arcana\\":\\"Blitz | Guerilla | Skewer\\",\\"items\\":\\"\\",\\"matchups\\":\\"\\",\\"combos\\":\\"\\",\\"video_url\\":\\"https://www.youtube.com/watch?v=DP_Y8krP3Y0\\",\\"url\\":\\"\\"}"
78	Darkbreaker Bow of Slaughter	39	36	11	3	45	29	{}	{}	{}	{}	{}	{}	3	26	1	6	3	"{\\"summary\\":\\"\\",\\"arcana\\":\\"Blitz | Guerilla | Skewer\\",\\"items\\":\\"\\",\\"matchups\\":\\"\\",\\"combos\\":\\"\\",\\"video_url\\":\\"https://www.youtube.com/watch?v=-EaiFly8rIo\\",\\"url\\":\\"\\"}"
\.


--
-- Data for Name: GameMode; Type: TABLE DATA; Schema: public; Owner: ericchen0121
--

COPY public."GameMode" (id, name) FROM stdin;
1	5v5
2	Death Match
\.


--
-- Data for Name: Hero; Type: TABLE DATA; Schema: public; Owner: ericchen0121
--

COPY public."Hero" (id, name, version_id) FROM stdin;
1	Tulen	3
2	Airi	3
3	Aleister	3
4	Alice	3
5	Arduin	3
6	Arthur	3
7	Astrid	3
8	Azzen'Ka	3
9	Batman	3
10	Butterfly	3
11	Chaugnar	3
12	Cresht	3
13	Diaochan	3
14	Fennik	3
15	Gildur	3
16	Grakk	3
17	Ignis	3
18	Ilumia	3
19	Jinnar	3
20	Kahlii	3
21	Kil'Groth	3
22	Kriknak	3
23	Krixi	3
24	Lauriel	3
25	Liliana	3
26	Lindis	3
27	Lu Bu	3
28	Lumburr	3
29	Maloch	3
30	Max	3
31	Mganga	3
32	Mina	3
33	Moren	3
34	Murad	3
35	Nakroth	3
36	Natalya	3
37	Omega	3
38	Omen	3
39	Ormarr	3
40	Peura	3
41	Preyta	3
42	Raz	3
43	Ryoma	3
44	Skud	3
45	Slimz	3
46	Superman	3
47	Taara	3
48	TeeMee	3
49	Tel'Annas	3
50	Thane	3
51	Flash	3
52	Joker	3
53	Toro	3
54	Valhein	3
55	Veera	3
56	Violet	3
57	Wisp	3
58	Wonder Woman	3
59	Wukong	3
60	Xeniel	3
61	Yorn	3
62	Zanis	3
63	Zephys	3
64	Zill	3
65	Zuka	3
66	Rourke	3
67	Arum	3
68	Marja	3
69	Baldum	3
\.


--
-- Data for Name: Item; Type: TABLE DATA; Schema: public; Owner: ericchen0121
--

COPY public."Item" (id, name, type, cost, version_id) FROM stdin;
\.


--
-- Data for Name: Player; Type: TABLE DATA; Schema: public; Owner: ericchen0121
--

COPY public."Player" (id, name, real_name, role, twitter, facebook, youtube, instagram, twitch, email, discord, garena, user_id, team_id) FROM stdin;
1	alwaysgr33n	Drew Miller	support	alwaysgr33n	\N	\N	\N	\N	always.gr33n.gaming@gmail.com	\N	\N	\N	1
2	dualspirals	Martin Chaney	midlane	dualspirals	\N	\N	\N	dualspirals	dualspiralsf@gmail.com	\N	\N	\N	1
3	vaor	Arick Jacobsen	\N	AoV_Vaor	\N	\N	\N	\N	\N	\N	\N	\N	1
4	Zelph	Alexi Wolinski	\N	\N	\N	\N	\N	thezelph	thezelphtwitch@gmail.com	\N	\N	\N	1
5	bruticus	Kaden Smith	sidelaner	F3Bruticus	\N	\N	\N	\N	\N	\N	\N	\N	1
6	Cheesy	Joe Barrett	\N	CheeeeeeeesyGG	\N	\N	\N	cheeeeeeeesy	\N	\N	\N	\N	1
7	rocker	\N	\N	AovRocker	\N	\N	\N	\N	\N	\N	\N	\N	2
8	sleepy	\N	\N	Sleepy1105	\N	\N	\N	\N	\N	\N	\N	\N	2
9	mts	\N	toplane	mtsamazing	\N	\N	\N	\N	\N	\N	\N	\N	2
11	pyu	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	2
12	ko	\N	toplane	ImtheKO1	\N	\N	\N	\N	\N	\N	\N	\N	2
13	Dave	David Mao	\N	Assassin_Dave	\N	UCSKlX7a2woYDF22KDAj4m8Q	\N	\N	\N	\N	\N	\N	3
14	BoBo	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	3
15	KzFox	\N	\N	KevinzFox	\N	\N	\N	\N	\N	\N	\N	\N	3
16	80sHero	\N	midlane	80sHero_	\N	\N	\N	80sHero	\N	\N	\N	\N	3
17	xTears	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	3
18	Beg	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	3
19	Neo	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	3
20	CL'z	\N	\N	drCLz	\N	\N	\N	\N	\N	\N	\N	\N	4
21	ZK	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	4
22	YikeZ	\N	\N	DrYikeZ	\N	\N	\N	\N	AovAmir@icloud.com	\N	\N	\N	4
23	HooN	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	4
24	Beast	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	4
25	Shozen	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	4
27	Darkbreaker	\N	\N	HieuNguyen995	\N	UCb-1HjL0QKvyijvsqEQIaGg	\N	\N	\N	\N	\N	\N	5
28	y01	\N	\N	whyohone	\N	\N	\N	\N	\N	\N	\N	\N	5
29	CEBKAje	\N	\N	Cebkaje	\N	\N	\N	\N	\N	\N	\N	\N	5
30	Crayen	\N	\N	_crayen	\N	\N	\N	\N	\N	\N	\N	\N	5
31	Poseidon	Vladyslav Maksymchuk	\N	roksen09	\N	\N	\N	\N	vlat618@gmail.com	\N	\N	\N	5
32	EDU	Okan Hapakaz	\N	OkanHpkz	\N	UCJ5YTbSYNTVuJuitH8Kqv-A	\N	VivaxEDU	\N	\N	\N	\N	6
33	Knight	Halil Berke Öztürk	\N	Allenkys911	\N	\N	berkeozturk09	\N	\N	\N	\N	\N	6
35	Lui	Yunus Ataş	\N	Luiyunus	\N	\N	\N	\N	\N	\N	\N	\N	6
36	Pich	Yunus Saral	\N	PichSK	PichMoba	UC5cS6OGrmpWkYKp-nLO8cHw	\N	\N	\N	\N	\N	\N	6
37	shurko	\N	midlane	shurkotv	\N	UCJCvhnTVGhTUFCHw_iu9XkQ	\N	shurkotv	\N	\N	\N	\N	7
38	Arena of Violet	\N	jungler	ArenaofViolet	\N	\N	\N	\N	\N	\N	\N	\N	7
39	Grizzlyq	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	7
40	simjo	\N	\N	SimjoYt	\N	\N	\N	simjotv	\N	\N	\N	\N	7
41	Rezz	\N	solo lane	TheRealRezz	RezzGaming	UCbg0u5-U4FF8sXCVG_xJ47w	\N	rezzlove	\N	\N	\N	\N	7
42	Bobbykart	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	8
43	Hakai	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	8
44	Lee	\N	jungler	AovLee	\N	UC78sG8xRRiYDIBBbj1Y9nYw	\N	\N	\N	\N	\N	\N	8
45	Memorized	\N	\N	AoV_V8	\N	\N	\N	\N	\N	\N	\N	\N	8
46	V8	\N	\N	AoV_V8	\N	\N	\N	\N	\N	\N	\N	\N	8
47	Flow	Florian Frisch	\N	Vitality_Flow	\N	\N	\N	\N	\N	\N	\N	\N	9
48	Redemption	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	9
49	Suitaro	\N	\N	VitalitySuitaro	\N	\N	\N	\N	\N	\N	\N	\N	9
50	Ika	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	9
51	Azure	\N	support	Vitality_Azure	\N	UC2f_wAanlOibzPUT-i5R8xw	\N	\N	\N	\N	\N	\N	9
52	Moon	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	9
53	King	\N	\N	KingYeXiu	\N	\N	\N	\N	\N	\N	\N	\N	9
54	Redemption	\N	jungler	REDemption_Kh	\N	\N	\N	\N	\N	\N	\N	\N	9
55	Yuzon	\N	sidelane	\N	\N	\N	\N	\N	\N	\N	\N	\N	10
56	Neil	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	10
57	Winds	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	10
58	Star	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	10
59	Benny	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	10
60	Chawan	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	10
61	Tuna	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	10
62	Liang	Liang-Chih Chen	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	11
63	Chichi	Chun-Chi li	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	11
65	Sirenia	Wei-Chia Hung	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	11
67	Wayyn	Sung-Lin Hsieh	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	11
26	iFlekzz	\N	\N	iFlekzz	\N	UCxDfWvqw8U9dLv0jrrVHlxQ	\N	\N	\N	\N	\N	\N	5
64	Hanzo	Cheng-Tsai Huang	midlane	\N	SMGHanzo1205	\N	\N	\N	\N	\N	smghanzo	\N	11
66	Genji	Chih-Lung Cheng	jungler	\N	\N	UCIp9jUV47yfBFmrEsS69E-w	\N	\N	\N	\N	smggenji	\N	11
34	Light	Yusuf Onat	\N	Yusufonat15	\N	UCxjXcbz9RyEOIxBdqgcUFXQ	yusufonat2	\N	\N	\N	\N	\N	6
10	rest	Tanner Scadden	\N	RestAOV	\N	\N	\N	RestAOV	\N	\N	\N	\N	2
\.


--
-- Data for Name: SequelizeMeta; Type: TABLE DATA; Schema: public; Owner: ericchen0121
--

COPY public."SequelizeMeta" (name) FROM stdin;
Build_notes.js
Players_table.js
Tweet_table.js
\.


--
-- Data for Name: Team; Type: TABLE DATA; Schema: public; Owner: ericchen0121
--

COPY public."Team" (id, name, alt_name, url, twitter, facebook, youtube, instagram, twitch, email, discord, garena, country, region, server) FROM stdin;
1	Flipsid3 Tactics	Flipsid3	\N	\N	\N	\N	\N	\N	\N	\N	\N	USA	NA	NA
2	Allegiance	ALG	\N	TeamAllegiance	\N	\N	\N	\N	info@triggerfish.gg	\N	\N	USA	NA	NA
3	Immortals	IMT	\N	\N	\N	\N	\N	\N	\N	\N	\N	USA	NA	NA
4	Dino Riders	Dino Riders	\N	\N	\N	\N	\N	\N	\N	\N	\N	USA	NA	NA
5	Nova eSports	Nova	\N	NovaEsportsTeam	\N	\N	\N	\N	\N	\N	\N	\N	EU	EU
6	SK Gaming	SK	sk-gaming.com	\N	\N	\N	\N	\N	\N	\N	\N	\N	EU	EU
8	Team Royal	\N	\N	Team_RoyaL_AOV	\N	\N	\N	\N	\N	\N	\N	\N	EU	EU
9	Vitality	\N	\N	Team_Vitality	\N	\N	\N	\N	\N	\N	\N	\N	EU	EU
10	J Team	JT	\N	\N	\N	\N	\N	\N	\N	\N	\N	Taiwan	SEA	\N
11	Still Moving Under Gunfire	SMG	\N	\N	\N	\N	\N	\N	\N	\N	\N	Taiwan	SEA	Taiwan
7	For the Dream	FTD	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	EU	EU
\.


--
-- Data for Name: Tweet; Type: TABLE DATA; Schema: public; Owner: ericchen0121
--

COPY public."Tweet" (twid, active, author, avatar, body, date, screenname) FROM stdin;
1015024619760185300	f	legendary	http://pbs.twimg.com/profile_images/997954880168910848/HD-y1KaL_normal.jpg	aov legendary	2018-07-06 00:08:22+00	LegendaryInc100
1015024890561392600	f	harlogaming	http://pbs.twimg.com/profile_images/589284284847919105/uQXgKJUk_normal.jpg	RT @RealThirstyman: We'll stream some #OctopathTraveler #FortniteBattleRoyale #H1z1ps4  and #YakuzaZero tonight.  The stream starts in 15 m…	2018-07-06 00:09:26+00	harlogamingtv
1015772745572012000	f	Slow	http://pbs.twimg.com/profile_images/1014894215023775746/TcetQoVD_normal.jpg	RT @haslaisfeed: Luffy: sé mi nakama\nCualquier ser con el que se cruza: pero yo tengo mi vida aquí\nLuffy: PERDONA PERDONA te he preguntado…	2018-07-08 01:41:09+00	SlOwAoV
1015044846115958800	f	[FX]Boomer🐉	http://pbs.twimg.com/profile_images/1009955725840248833/VX7Yv08o_normal.jpg	RT @catsnpizza: hello hi heads up i’m streaming @Nintendo Switch games tonight at 10:30pm EST \n\nstarting with @PaladinsGame thanks to @DSTA…	2018-07-06 01:28:44+00	VgBoomer6god
1015044891385126900	f	MistressOfDeath	http://pbs.twimg.com/profile_images/1012278198384541696/-6wLxm6i_normal.jpg	Waiting for Twitchcon tickets...	2018-07-06 01:28:55+00	brattyxan
1015045081030520800	f	MistressOfDeath	http://pbs.twimg.com/profile_images/1012278198384541696/-6wLxm6i_normal.jpg	“Tickets will go on sale first week of July.”\nMe : ... it’s already the 6th, Twitchcon!?????	2018-07-06 01:29:40+00	brattyxan
1015774194066444300	f	Slow	http://pbs.twimg.com/profile_images/1014894215023775746/TcetQoVD_normal.jpg	RT @PhotoGhibli: https://t.co/L20BtKeqw6	2018-07-08 01:46:54+00	SlOwAoV
1015056704910680000	f	ALG Rest	http://pbs.twimg.com/profile_images/1011845989852803072/r0dYotzE_normal.jpg	Still sick, but gonna stream for a bit https://t.co/7ta04KR7qR	2018-07-06 02:15:51+00	RestAOV
1015198010630959100	f	Darkbreaker	http://pbs.twimg.com/profile_images/1006278369804148736/Rov2JD5K_normal.jpg	BEST ZUKA BUILD AFTER UPDATE | ARENA OF VALOR ZUKA GAMEPLAY https://t.co/NPXY1DH22n via @YouTube @ArenaofValor	2018-07-06 11:37:21+00	HieuNguyen995
1015779357854502900	f	Focuzed	http://pbs.twimg.com/profile_images/790592527351046144/ZxzcDAVW_normal.jpg	I’m sure the team I’m on, verified &amp; taking over, @WorldBestGaming may be of interest to you. Maybe my homie &amp; ceo… https://t.co/DxlBnOC1EH	2018-07-08 02:07:25+00	Focuzed
1015382278204215300	f	Daniel Ahmad	http://pbs.twimg.com/profile_images/895728543618957312/w_icFZwA_normal.jpg	RT @GIBiz: Pokemon GO has brought in $1.8 billion since launch\nhttps://t.co/YX4qiI9oj7 Pokemon's foray into augmented reality sees players…	2018-07-06 23:49:34+00	ZhugeEX
1015788297220747300	f	Focuzed	http://pbs.twimg.com/profile_images/790592527351046144/ZxzcDAVW_normal.jpg	*!!* LIVE NOW *!!*\n\nA Psycho In A Survivors World!\n\nDownload the Fluxr Mobile App for the best experience!\n\niOS:… https://t.co/mYEcZ6xW1F	2018-07-08 02:42:57+00	Focuzed
1015382932024971300	f	Daniel Ahmad	http://pbs.twimg.com/profile_images/895728543618957312/w_icFZwA_normal.jpg	RT @LawofTD: In S. Korea, netizens already police game developers' social media accounts to find things they can bring to the devs' employe…	2018-07-06 23:52:10+00	ZhugeEX
1015789101365235700	f	Focuzed	http://pbs.twimg.com/profile_images/790592527351046144/ZxzcDAVW_normal.jpg	*!!* LIVE NOW *!!*\n\nA Psycho In A Survivors World!\n\nDownload the Fluxr Mobile App for the best experience!\n\niOS:… https://t.co/RcJ1ROVmSv	2018-07-08 02:46:08+00	Focuzed
1015383855493275600	f	Slow	http://pbs.twimg.com/profile_images/1014894215023775746/TcetQoVD_normal.jpg	RT @zPrah_YT: ¿Quién tiene más talento? \n\n🔁 RT Palo\n❤Fav Dalas https://t.co/GOcCbytD4h	2018-07-06 23:55:50+00	SlOwAoV
1015823200029237200	f	Slow	http://pbs.twimg.com/profile_images/1014894215023775746/TcetQoVD_normal.jpg	RT @pickledroncio: la única forma de beber gazpacho. https://t.co/Q9G0nXR9Ai	2018-07-08 05:01:38+00	SlOwAoV
1015383935898005500	f	Slow	http://pbs.twimg.com/profile_images/1014894215023775746/TcetQoVD_normal.jpg	RT @Batalla_Epica: 🔁 Pan amb tomaquet\n❤ Bocata de calamares https://t.co/E1Tych8ZL8	2018-07-06 23:56:09+00	SlOwAoV
1015836074042634200	f	Focuzed	http://pbs.twimg.com/profile_images/790592527351046144/ZxzcDAVW_normal.jpg	Come and see it https://t.co/mBNPGImLZS	2018-07-08 05:52:48+00	Focuzed
1015385895925633000	f	Daniel Ahmad	http://pbs.twimg.com/profile_images/895728543618957312/w_icFZwA_normal.jpg	RT @gamasutra: Following Fate/Grand Order international release, Sony Aniplex hits $1.8B revenue\nhttps://t.co/408gyWHirp https://t.co/vr3rD…	2018-07-07 00:03:57+00	ZhugeEX
1015839561686093800	f	Arena of Violet	http://pbs.twimg.com/profile_images/1010157311095132161/jBRel2iB_normal.jpg	Xdddddddd https://t.co/w79sQTjbBz	2018-07-08 06:06:39+00	ArenaofViolet
1015386310251429900	f	Jacob	http://pbs.twimg.com/profile_images/983468260854136832/F9tSz110_normal.jpg	@Chicken_vg Lmao https://t.co/x8S4qgMroH	2018-07-07 00:05:35+00	BeginningsAoV
1015386904399712300	f	Arena of Valor	http://pbs.twimg.com/profile_images/991427539821182977/Hf5AsdM__normal.jpg	RT @AoVEsports: Top 5 | AWC Boot Camp EP.3 https://t.co/DPTeBWhn7R #awcbootcamp	2018-07-07 00:07:57+00	ArenaofValor
1015856555789467600	f	Nick Z	http://pbs.twimg.com/profile_images/880595767953690624/IxXN-tNt_normal.jpg	All of you hating on Scorpion - I don't get. I've had this in HEAVY rotation	2018-07-08 07:14:11+00	nickzazzer
1015401714403323900	f	Bil Carter	http://pbs.twimg.com/profile_images/1006542366952415232/5a6rf2XR_normal.jpg	Filling out Fall schedules and BOY OH BOY do we have some fun things coming up for you peeps.\n\nGrind never stops people	2018-07-07 01:06:48+00	Jump_
1015404062085402600	f	BBXH	http://pbs.twimg.com/profile_images/1006294274101665796/gjndNWO__normal.jpg	Training for the #WorldCup 😂😂😂⚽️⚽️⚽️ https://t.co/B1NAGKk5dX	2018-07-07 01:16:08+00	bbxh_twitch
1015423890271526900	f	SuiJeneris	http://pbs.twimg.com/profile_images/984707552502927360/8vgGQM4u_normal.jpg	@ChiefPat @EA Hopefully, I'll get to visit EA someday too! I was at NetMarble offices in DTLA 😁	2018-07-07 02:34:55+00	SJeneris
1015424897114181600	f	AOV Pro	http://pbs.twimg.com/profile_images/936594867848847360/_uAAf9y1_normal.jpg	@Jump_ @ArenaofValor In my opinion, if Double Elim start from Quarterfinal will be better!	2018-07-07 02:38:55+00	AoVPro
1015426563402293200	f	Focuzed	http://pbs.twimg.com/profile_images/790592527351046144/ZxzcDAVW_normal.jpg	*!!* LIVE NOW *!!*\n\nNEW DOPE MOBILE GAME!\n\nDownload the Fluxr Mobile App for the best experience!\n\niOS:… https://t.co/bLm3n1DPX4	2018-07-07 02:45:33+00	Focuzed
1015428863403311100	f	Focuzed	http://pbs.twimg.com/profile_images/790592527351046144/ZxzcDAVW_normal.jpg	*!!* LIVE NOW *!!*\n\nNEW DOPE MOBILE GAME!\n\nDownload the Fluxr Mobile App for the best experience!\n\niOS:… https://t.co/SIvNwZP8XZ	2018-07-07 02:54:41+00	Focuzed
1015455819230396400	f	80sHero	http://pbs.twimg.com/profile_images/935939957968871424/P0fHBfkT_normal.jpg	RT @ElDonIraqiZorro: This Realm Royale update though... LOL	2018-07-07 04:41:48+00	80sHero_
1015465303541723100	f	Focuzed	http://pbs.twimg.com/profile_images/790592527351046144/ZxzcDAVW_normal.jpg	Come and see it https://t.co/GFZVjSvSVA	2018-07-07 05:19:29+00	Focuzed
1015720589728895000	f	Slow	http://pbs.twimg.com/profile_images/1014894215023775746/TcetQoVD_normal.jpg	RT @aestheticsweeb: https://t.co/BKNKLld5qZ	2018-07-07 22:13:54+00	SlOwAoV
1015721474181730300	f	Slow	http://pbs.twimg.com/profile_images/1014894215023775746/TcetQoVD_normal.jpg	RT @horikoshiko: 宣伝のツイートは消しました。今日アニメやりません、失礼しました！ https://t.co/1FJZYovoFE	2018-07-07 22:17:25+00	SlOwAoV
1015848182985527300	f	Nick Z	http://pbs.twimg.com/profile_images/880595767953690624/IxXN-tNt_normal.jpg	KEKE	2018-07-08 06:40:55+00	nickzazzer
1015721823697342500	f	Slow	http://pbs.twimg.com/profile_images/1014894215023775746/TcetQoVD_normal.jpg	RT @f_burning: -"Esta semana no hay capítulo de Boku no hero"\n- https://t.co/z9EB4i59TM	2018-07-07 22:18:48+00	SlOwAoV
1015722149703643100	f	Jacob	http://pbs.twimg.com/profile_images/983468260854136832/F9tSz110_normal.jpg	RT @hondadeal4vets: Latinas stay winning	2018-07-07 22:20:06+00	BeginningsAoV
1015722914442809300	f	Focuzed	http://pbs.twimg.com/profile_images/790592527351046144/ZxzcDAVW_normal.jpg	I liked a @YouTube video https://t.co/1qoUZ3ocLa In This Moment - Big Bad Wolf (Official Video)	2018-07-07 22:23:08+00	Focuzed
1015725542996348900	f	ᴍᴀʟ3ꜰɪᴄᴀʀᴜᴍ | 🤘	http://pbs.twimg.com/profile_images/1009900664531636224/-cmI0c6N_normal.jpg	Okay, @JagexSupport I'm on the @OldSchoolRS beta and trying to remember my account from like 2003..ish... will it still exist? :p	2018-07-07 22:33:35+00	mal3ficarum
1015727211566059500	f	ᴍᴀʟ3ꜰɪᴄᴀʀᴜᴍ | 🤘	http://pbs.twimg.com/profile_images/1009900664531636224/-cmI0c6N_normal.jpg	GIMME THAT QUAD! :p #AoV https://t.co/TfynC7ahZA	2018-07-07 22:40:13+00	mal3ficarum
1015774218456387600	f	Slow	http://pbs.twimg.com/profile_images/1014894215023775746/TcetQoVD_normal.jpg	RT @RobandoSuspiros: Debo tener esto siempre presente: https://t.co/p2Sm7G9fct	2018-07-08 01:47:00+00	SlOwAoV
1015735936230019100	f	Nova Esports	http://pbs.twimg.com/profile_images/864868091859263493/giUsx8WN_normal.jpg	How many of you are buying emote bundles in @ClashRoyale?! New Giant emotes release today🍖	2018-07-07 23:14:53+00	NovaEsportsTeam
1015755740118704100	f	Focuzed	http://pbs.twimg.com/profile_images/790592527351046144/ZxzcDAVW_normal.jpg	RT @Omeed: So @PlayWarframe hosts its keynote for 400k viewers. What do they do after? Throw their audience to @GuardianCon's charity strea…	2018-07-08 00:33:34+00	Focuzed
1015758862094348300	f	Paul Todkill	http://pbs.twimg.com/profile_images/1008065604492853250/sR_mlaCD_normal.jpg	Busy days ahead. Sometimes it pays to take some time off to unwind and unplug (a little). Gotta give it to Canada,… https://t.co/K4XTbQgE6b	2018-07-08 00:45:59+00	InVerumGaming
1015770664769343500	f	Slow	http://pbs.twimg.com/profile_images/1014894215023775746/TcetQoVD_normal.jpg	A escuchar el nuevo álbum de Keo a ver qué tal.	2018-07-08 01:32:53+00	SlOwAoV
1015770753772478500	f	Slow	http://pbs.twimg.com/profile_images/1014894215023775746/TcetQoVD_normal.jpg	RT @queoscontais: estoy en mi cuarto con la ventana abierta y he eructado muy muy fuerte\n\nse ha escuchado a una vecina decir jesus bendito…	2018-07-08 01:33:14+00	SlOwAoV
1015772519427727400	f	alwaysgr33n	http://pbs.twimg.com/profile_images/1009318075378921472/AB_Mfsjr_normal.jpg	RT @BlakkStarr83: GET WITH FLUXR GUYS. FOLLOW THE BEST FAM ON THERE @ageekychick @KingAsher @Apx4k @JuiceWaayyne @alwaysgr33n #HelloFluxr #…	2018-07-08 01:40:15+00	alwaysgr33n
\.


--
-- Data for Name: User; Type: TABLE DATA; Schema: public; Owner: ericchen0121
--

COPY public."User" (id, username, email, email_confirmed, password, last_login) FROM stdin;
1	legendaryaov	eric.chen0121@gmail.com	f	$2b$08$fTYC2yGI7JVeFk1Es1Htn.RLNhoeRgM2egzGz4Bh..ddYRszc367i	\N
5	zelph	thezelph@gmail.com	f	$2b$08$vSILNN4SUnefAjuDUpzbzuFP84FRfi/MfMJ8Ec1y/ecuqxJV5wY0a	2018-07-10 01:12:29.249+00
6	darkbreaker	darkbreaker@gmail.com	f	$2b$08$9ihLvDIq7xnvpL0BQS5yJ.JxuNL8iyBlWbKPTEvHoXTMC8Kg0azH.	2018-07-15 01:37:02.808+00
\.


--
-- Data for Name: UserClaim; Type: TABLE DATA; Schema: public; Owner: ericchen0121
--

COPY public."UserClaim" (id, type, value, user_id) FROM stdin;
\.


--
-- Data for Name: UserLogin; Type: TABLE DATA; Schema: public; Owner: ericchen0121
--

COPY public."UserLogin" (name, key, user_id) FROM stdin;
\.


--
-- Data for Name: UserProfile; Type: TABLE DATA; Schema: public; Owner: ericchen0121
--

COPY public."UserProfile" ("userId", "displayName", picture, gender, location, website, user_id) FROM stdin;
\.


--
-- Data for Name: Version; Type: TABLE DATA; Schema: public; Owner: ericchen0121
--

COPY public."Version" (id, version_number, version_date, server) FROM stdin;
1	13	2018-04-12	NA
2	14	2018-05-26	NA
3	15	2018-06-25	NA
\.


--
-- Name: Build_id_seq; Type: SEQUENCE SET; Schema: public; Owner: ericchen0121
--

SELECT pg_catalog.setval('public."Build_id_seq"', 78, true);


--
-- Name: GameMode_id_seq; Type: SEQUENCE SET; Schema: public; Owner: ericchen0121
--

SELECT pg_catalog.setval('public."GameMode_id_seq"', 2, true);


--
-- Name: Hero_id_seq; Type: SEQUENCE SET; Schema: public; Owner: ericchen0121
--

SELECT pg_catalog.setval('public."Hero_id_seq"', 68, true);


--
-- Name: Item_id_seq; Type: SEQUENCE SET; Schema: public; Owner: ericchen0121
--

SELECT pg_catalog.setval('public."Item_id_seq"', 1, false);


--
-- Name: Player_id_seq; Type: SEQUENCE SET; Schema: public; Owner: ericchen0121
--

SELECT pg_catalog.setval('public."Player_id_seq"', 67, true);


--
-- Name: Team_id_seq; Type: SEQUENCE SET; Schema: public; Owner: ericchen0121
--

SELECT pg_catalog.setval('public."Team_id_seq"', 11, true);


--
-- Name: UserClaim_id_seq; Type: SEQUENCE SET; Schema: public; Owner: ericchen0121
--

SELECT pg_catalog.setval('public."UserClaim_id_seq"', 1, false);


--
-- Name: User_id_seq; Type: SEQUENCE SET; Schema: public; Owner: ericchen0121
--

SELECT pg_catalog.setval('public."User_id_seq"', 6, true);


--
-- Name: Version_id_seq; Type: SEQUENCE SET; Schema: public; Owner: ericchen0121
--

SELECT pg_catalog.setval('public."Version_id_seq"', 6, true);


--
-- Name: Arcana Arcana_pkey; Type: CONSTRAINT; Schema: public; Owner: ericchen0121
--

ALTER TABLE ONLY public."Arcana"
    ADD CONSTRAINT "Arcana_pkey" PRIMARY KEY (id);


--
-- Name: Build Build_pkey; Type: CONSTRAINT; Schema: public; Owner: ericchen0121
--

ALTER TABLE ONLY public."Build"
    ADD CONSTRAINT "Build_pkey" PRIMARY KEY (id);


--
-- Name: GameMode GameMode_name_key; Type: CONSTRAINT; Schema: public; Owner: ericchen0121
--

ALTER TABLE ONLY public."GameMode"
    ADD CONSTRAINT "GameMode_name_key" UNIQUE (name);


--
-- Name: GameMode GameMode_pkey; Type: CONSTRAINT; Schema: public; Owner: ericchen0121
--

ALTER TABLE ONLY public."GameMode"
    ADD CONSTRAINT "GameMode_pkey" PRIMARY KEY (id);


--
-- Name: Hero Hero_pkey; Type: CONSTRAINT; Schema: public; Owner: ericchen0121
--

ALTER TABLE ONLY public."Hero"
    ADD CONSTRAINT "Hero_pkey" PRIMARY KEY (id);


--
-- Name: Item Item_pkey; Type: CONSTRAINT; Schema: public; Owner: ericchen0121
--

ALTER TABLE ONLY public."Item"
    ADD CONSTRAINT "Item_pkey" PRIMARY KEY (id);


--
-- Name: Player Player_pkey; Type: CONSTRAINT; Schema: public; Owner: ericchen0121
--

ALTER TABLE ONLY public."Player"
    ADD CONSTRAINT "Player_pkey" PRIMARY KEY (id);


--
-- Name: SequelizeMeta SequelizeMeta_pkey; Type: CONSTRAINT; Schema: public; Owner: ericchen0121
--

ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);


--
-- Name: Team Team_pkey; Type: CONSTRAINT; Schema: public; Owner: ericchen0121
--

ALTER TABLE ONLY public."Team"
    ADD CONSTRAINT "Team_pkey" PRIMARY KEY (id);


--
-- Name: Tweet Tweet_pkey; Type: CONSTRAINT; Schema: public; Owner: ericchen0121
--

ALTER TABLE ONLY public."Tweet"
    ADD CONSTRAINT "Tweet_pkey" PRIMARY KEY (twid);


--
-- Name: UserClaim UserClaim_pkey; Type: CONSTRAINT; Schema: public; Owner: ericchen0121
--

ALTER TABLE ONLY public."UserClaim"
    ADD CONSTRAINT "UserClaim_pkey" PRIMARY KEY (id);


--
-- Name: UserLogin UserLogin_pkey; Type: CONSTRAINT; Schema: public; Owner: ericchen0121
--

ALTER TABLE ONLY public."UserLogin"
    ADD CONSTRAINT "UserLogin_pkey" PRIMARY KEY (name, key);


--
-- Name: UserProfile UserProfile_pkey; Type: CONSTRAINT; Schema: public; Owner: ericchen0121
--

ALTER TABLE ONLY public."UserProfile"
    ADD CONSTRAINT "UserProfile_pkey" PRIMARY KEY ("userId");


--
-- Name: User User_email_key; Type: CONSTRAINT; Schema: public; Owner: ericchen0121
--

ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_email_key" UNIQUE (email);


--
-- Name: User User_pkey; Type: CONSTRAINT; Schema: public; Owner: ericchen0121
--

ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_pkey" PRIMARY KEY (id);


--
-- Name: User User_username_key; Type: CONSTRAINT; Schema: public; Owner: ericchen0121
--

ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_username_key" UNIQUE (username);


--
-- Name: Version Version_pkey; Type: CONSTRAINT; Schema: public; Owner: ericchen0121
--

ALTER TABLE ONLY public."Version"
    ADD CONSTRAINT "Version_pkey" PRIMARY KEY (id);


--
-- Name: user_email_username; Type: INDEX; Schema: public; Owner: ericchen0121
--

CREATE INDEX user_email_username ON public."User" USING btree (email, username);


--
-- Name: Build Build_game_mode_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: ericchen0121
--

ALTER TABLE ONLY public."Build"
    ADD CONSTRAINT "Build_game_mode_id_fkey" FOREIGN KEY (game_mode_id) REFERENCES public."GameMode"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: Build Build_hero_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: ericchen0121
--

ALTER TABLE ONLY public."Build"
    ADD CONSTRAINT "Build_hero_id_fkey" FOREIGN KEY (hero_id) REFERENCES public."Hero"(id) ON UPDATE CASCADE;


--
-- Name: Build Build_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: ericchen0121
--

ALTER TABLE ONLY public."Build"
    ADD CONSTRAINT "Build_user_id_fkey" FOREIGN KEY (user_id) REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: Build Build_version_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: ericchen0121
--

ALTER TABLE ONLY public."Build"
    ADD CONSTRAINT "Build_version_id_fkey" FOREIGN KEY (version_id) REFERENCES public."Version"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: Hero Hero_version_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: ericchen0121
--

ALTER TABLE ONLY public."Hero"
    ADD CONSTRAINT "Hero_version_id_fkey" FOREIGN KEY (version_id) REFERENCES public."Version"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: Item Item_version_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: ericchen0121
--

ALTER TABLE ONLY public."Item"
    ADD CONSTRAINT "Item_version_id_fkey" FOREIGN KEY (version_id) REFERENCES public."Version"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: Player Player_team_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: ericchen0121
--

ALTER TABLE ONLY public."Player"
    ADD CONSTRAINT "Player_team_id_fkey" FOREIGN KEY (team_id) REFERENCES public."Team"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: Player Player_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: ericchen0121
--

ALTER TABLE ONLY public."Player"
    ADD CONSTRAINT "Player_user_id_fkey" FOREIGN KEY (user_id) REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: UserClaim UserClaim_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: ericchen0121
--

ALTER TABLE ONLY public."UserClaim"
    ADD CONSTRAINT "UserClaim_user_id_fkey" FOREIGN KEY (user_id) REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: UserLogin UserLogin_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: ericchen0121
--

ALTER TABLE ONLY public."UserLogin"
    ADD CONSTRAINT "UserLogin_user_id_fkey" FOREIGN KEY (user_id) REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: UserProfile UserProfile_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: ericchen0121
--

ALTER TABLE ONLY public."UserProfile"
    ADD CONSTRAINT "UserProfile_user_id_fkey" FOREIGN KEY (user_id) REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: ericchen0121
--

REVOKE ALL ON SCHEMA public FROM rdsadmin;
REVOKE ALL ON SCHEMA public FROM PUBLIC;
GRANT ALL ON SCHEMA public TO ericchen0121;
GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

