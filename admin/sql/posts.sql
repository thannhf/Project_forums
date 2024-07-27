CREATE TABLE `posts` (
  `id_post` int(11) NOT NULL,
  `title` text COLLATE utf8_unicode_ci NOT NULL,
  `descr` text COLLATE utf8_unicode_ci NOT NULL,
  `url_thumb` text COLLATE utf8_unicode_ci NOT NULL,
  `slug` text COLLATE utf8_unicode_ci NOT NULL,
  `keywords` text COLLATE utf8_unicode_ci NOT NULL,
  `body` longtext COLLATE utf8_unicode_ci NOT NULL,
  `cate_1_id` int(11) NOT NULL,
  `cate_2_id` int(11) NOT NULL,
  `cate_3_id` int(11) NOT NULL,
  `author_id` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  `view` int(11) NOT NULL,
  `date_posted` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;