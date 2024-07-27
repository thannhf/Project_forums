CREATE TABLE `accounts` (
  `id_acc` int(11) NOT NULL,
  `username` varchar(32) CHARACTER SET utf8 NOT NULL,
  `password` varchar(32) CHARACTER SET utf8 NOT NULL,
  `display_name` varchar(50) CHARACTER SET utf8 NOT NULL,
  `email` text CHARACTER SET utf8 NOT NULL,
  `position` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  `date_created` datetime NOT NULL,
  `facebook` text CHARACTER SET utf8 NOT NULL,
  `google` text CHARACTER SET utf8 NOT NULL,
  `twitter` text CHARACTER SET utf8 NOT NULL,
  `phone` varchar(11) NOT NULL,
  `description` longtext CHARACTER SET utf8 NOT NULL,
  `url_avatar` text CHARACTER SET utf8 NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
ALTER TABLE `accounts`
  ADD PRIMARY KEY (`id_acc`);
ALTER TABLE `accounts`
  MODIFY `id_acc` int(11) NOT NULL AUTO_INCREMENT;