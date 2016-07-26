module SemanticsHelper
	def seed_database
	    cameras = ['https%3A%2F%2Fwww.amazon.com%2Fgp%2Fproduct%2FB007VGGFZU%2Fref%3Ds9_top_hd_bw_bCf6T_g421_i1%3Fpf_rd_m%3DATVPDKIKX0DER%26pf_rd_s%3Dmerchandised-search-4%26pf_rd_r%3DXRJNV9AWZ4G2XB7Y4FMX%26pf_rd_t%3D101%26pf_rd_p%3D2400001742%26pf_rd_i%3D3017941', 'https%3A%2F%2Fwww.amazon.com%2Fgp%2Fproduct%2FB00DY2Y28M%2Fref%3Ds9_top_hd_bw_bMMLR5_g421_i3%3Fpf_rd_m%3DATVPDKIKX0DER%26pf_rd_s%3Dmerchandised-search-5%26pf_rd_r%3DNW70W8VAMJHT42RTXSZG%26pf_rd_t%3D101%26pf_rd_p%3D2ab6ed3d-f1e0-5615-91f4-4acb46a42a52%26pf_rd_i%3D330405011', 'https%3A%2F%2Fwww.amazon.com%2Fgp%2Fproduct%2FB019UDHOMO%2Fref%3Ds9_simh_hd_bw_bMMLR5_p421_d0_i3%3Fpf_rd_m%3DATVPDKIKX0DER%26pf_rd_s%3Dmerchandised-search-4%26pf_rd_r%3DNW70W8VAMJHT42RTXSZG%26pf_rd_t%3D101%26pf_rd_p%3D169d2c36-3ed1-58f2-a1f8-863724fef808%26pf_rd_i%3D330405011', 'https%3A%2F%2Fwww.amazon.com%2Fgp%2Fproduct%2FB00RKNNA1G%2Fref%3Ds9_simh_hd_bw_bMMLR5_p421_d0_i2%3Fpf_rd_m%3DATVPDKIKX0DER%26pf_rd_s%3Dmerchandised-search-4%26pf_rd_r%3DNW70W8VAMJHT42RTXSZG%26pf_rd_t%3D101%26pf_rd_p%3D169d2c36-3ed1-58f2-a1f8-863724fef808%26pf_rd_i%3D330405011', 'https%3A%2F%2Fwww.amazon.com%2Fgp%2Fproduct%2FB01C3LEBW6%2Fref%3Ds9_newrz_hd_bw_bMMLR5_g421_i3%3Fpf_rd_m%3DATVPDKIKX0DER%26pf_rd_s%3Dmerchandised-search-6%26pf_rd_r%3DNW70W8VAMJHT42RTXSZG%26pf_rd_t%3D101%26pf_rd_p%3D61f2bd85-3ae9-43a2-8c2f-7652d41a335a%26pf_rd_i%3D330405011', 'https%3A%2F%2Fwww.amazon.com%2Fgp%2Fproduct%2FB00PCM0XAI%2Fref%3Ds9_simh_hd_bw_bCf6T_p421_d0_i3%3Fpf_rd_m%3DATVPDKIKX0DER%26pf_rd_s%3Dmerchandised-search-4%26pf_rd_r%3D2HXVR46D7JAT4Q03KXNQ%26pf_rd_t%3D101%26pf_rd_p%3D2400001742%26pf_rd_i%3D3017941', 'https%3A%2F%2Fwww.amazon.com%2Fgp%2Fproduct%2FB01I3LNQ6M%2Fref%3Ds9_newrz_hd_bw_b3OSvIh_g421_i2%3Fpf_rd_m%3DATVPDKIKX0DER%26pf_rd_s%3Dmerchandised-search-4%26pf_rd_r%3D8TMJFBKP7QGJ3XSCW2CY%26pf_rd_t%3D101%26pf_rd_p%3D2400006662%26pf_rd_i%3D3109924011', 'https%3A%2F%2Fwww.amazon.com%2FSVP-5800-Screen-Waterproof-Digital%2Fdp%2FB008VUZXQC%3Fie%3DUTF8%26ref_%3Dzg_bs_330405011_10']

      cameras.each do |url|

          attributes = {}
        
          response = HTTParty.get("http://api.diffbot.com/v3/product?token="+ENV['DIFFBOT_KEY']+"&url="+url)
    
          attributes["image_url"] = response["objects"][0]["images"][0]["url"]
    
          attributes["price"] = response["objects"][0]["offerPrice"][1..-1].to_f
    
          attributes["optical_zoom"] = response["objects"][0]["specs"]["optical_zoom"][0..-2].to_i
    
          attributes["item_weight"] = response["objects"][0]["specs"]["item_weight"].tr(' pounds', '').to_f

          if response["objects"][0]["specs"]["customer_reviews"]
    
            start = response["objects"][0]["specs"]["customer_reviews"].index("out")-4
      
            _end = response["objects"][0]["specs"]["customer_reviews"].index("out")-2
      
            attributes["average_rating"] = response["objects"][0]["specs"]["customer_reviews"][start.._end].to_f
          else
            attributes["average_rating"] = 0.0
          end
          attributes["name"] = response["objects"][0]["title"]
    
          Camera.create(attributes)
    
          sleep(2)
      end

      televisions = ['https%3A%2F%2Fwww.amazon.com%2FSamsung-UN55KU6300-55-Inch-Ultra-Smart%2Fdp%2FB01E69WHP6%2Fref%3Dsr_1_2%3Fs%3Delectronics%26ie%3DUTF8%26qid%3D1469478032%26sr%3D1-2%26refinements%3Dp_n_size_browse-bin%253A3578042011']

      televisions.each do |url|

        attributes = {}
        
        response = HTTParty.get("http://api.diffbot.com/v3/product?token="+ENV['DIFFBOT_KEY']+"&url="+url)

        attributes["image_url"] = response["objects"][0]["images"][0]["url"]

        attributes["price"]=response["objects"][0]["offerPrice"][1..-1].to_f

        attributes["name"] = response["objects"][0]["title"]

        if response["objects"][0]["specs"]["customer_reviews"]

          start = response["objects"][0]["specs"]["customer_reviews"].index("out")-4
    
          _end = response["objects"][0]["specs"]["customer_reviews"].index("out")-2
    
          attributes["average_rating"] = response["objects"][0]["specs"]["customer_reviews"][start.._end].to_f
        else
          attributes["average_rating"] = 0.0
        end

        if response["objects"][0]["specs"]["display_size"]
          _end = response["objects"][0]["specs"]["display_size"].index(" ")
          attributes["display_size"] = response["objects"][0]["specs"]["display_size"][0.._end].to_f
        else
          attributes["display_size"] = 0.0
        end

        if response["objects"][0]["specs"]["display_technology"]
            attributes["display_technology"] = response["objects"][0]["specs"]["display_technology"]
        else
          attributes["display_technology"] = ""
        end

        if response["objects"][0]["specs"]["resolution"]
          attributes["resolution"] = response["objects"][0]["specs"]["resolution"]
        else
          attributes["resolution"] = ""
        end

        Television.create(attributes)
    
          sleep(2)

      end

    laptops = ['https%3A%2F%2Fwww.amazon.com%2Fdp%2FB015PYYDMQ%2Fref%3Dgb1h_tit_u10_4102_58398fba%3Fsmid%3DATVPDKIKX0DER%26pf_rd_m%3DATVPDKIKX0DER%26pf_rd_t%3D101%26pf_rd_s%3Dunified-hybrid-10%26pf_rd_r%3DFVNBGZ583368ZHEQYTFS%26pf_rd_i%3D13896617011%26pf_rd_p%3D2478754102', 'https%3A%2F%2Fwww.amazon.com%2Fdp%2FB015PYZX0C%2Fref%3Dgb1h_tit_u10_4102_a3b04106%3Fsmid%3DATVPDKIKX0DER%26pf_rd_m%3DATVPDKIKX0DER%26pf_rd_t%3D101%26pf_rd_s%3Dunified-hybrid-10%26pf_rd_r%3DFVNBGZ583368ZHEQYTFS%26pf_rd_i%3D13896617011%26pf_rd_p%3D2478754102', 'https%3A%2F%2Fwww.amazon.com%2Fdp%2FB00ZALVDSW%2Fref%3Dgb1h_tit_u10_4102_6f4c81e1%3Fsmid%3DATVPDKIKX0DER%26pf_rd_m%3DATVPDKIKX0DER%26pf_rd_t%3D101%26pf_rd_s%3Dunified-hybrid-10%26pf_rd_r%3DFVNBGZ583368ZHEQYTFS%26pf_rd_i%3D13896617011%26pf_rd_p%3D2478754102', 'https%3A%2F%2Fwww.amazon.com%2Fdp%2FB0149HZ658%2Fref%3Dgb1h_tit_u10_4102_da20487f%3Fsmid%3DATVPDKIKX0DER%26pf_rd_m%3DATVPDKIKX0DER%26pf_rd_t%3D101%26pf_rd_s%3Dunified-hybrid-10%26pf_rd_r%3DFVNBGZ583368ZHEQYTFS%26pf_rd_i%3D13896617011%26pf_rd_p%3D2478754102', 'https%3A%2F%2Fwww.amazon.com%2Fdp%2FB0163GNS5S', 'https%3A%2F%2Fwww.amazon.com%2Fdp%2FB01AZ7LS94', 'https%3A%2F%2Fwww.amazon.com%2Fdp%2FB014QVM2KE', 'https%3A%2F%2Fwww.amazon.com%2Fdp%2FB011KFQASE', 'https%3A%2F%2Fwww.amazon.com%2Fdp%2FB014VHW24Y']

    laptops.each do |url|
      attributes = {}

      response = HTTParty.get("http://api.diffbot.com/v3/product?token="+ENV['DIFFBOT_KEY']+"&url="+url)

      attributes["image_url"] = response["objects"][0]["images"][0]["url"]
    
      attributes["price"] = response["objects"][0]["offerPrice"][1..-1].to_f

      if response["objects"][0]["specs"]["customer_reviews"]
    
        start = response["objects"][0]["specs"]["customer_reviews"].index("out")-4
  
        _end = response["objects"][0]["specs"]["customer_reviews"].index("out")-2
  
        attributes["average_rating"] = response["objects"][0]["specs"]["customer_reviews"][start.._end].to_f
        else
          attributes["average_rating"] = 0.0
        end
      attributes["name"] = response["objects"][0]["title"]

      if response["objects"][0]["specs"]["ram"]
        attributes["ram"] = response["objects"][0]["specs"]["ram"][0].to_i
      else
        attributes["ram"] = 0
      end

      if response["objects"][0]["specs"]["flash_memory_size"]
        attributes["flash_memory_size"] = response["objects"][0]["specs"]["flash_memory_size"].to_i
      else
        attributes["flash_memory_size"] = 0
      end

      if response["objects"][0]["specs"]["screen_size"]
        _end = response["objects"][0]["specs"]["screen_size"].index(" ")
        attributes["screen_size"] = response["objects"][0]["specs"]["screen_size"][0.._end].to_f
      else
        attributes["screen_size"] = 0 
      end

      if response["objects"][0]["specs"]["max_screen_resolution"]
        attributes["max_screen_resolution"] = response["objects"][0]["specs"]["max_screen_resolution"]
      else
        attributes["max_screen_resolution"] = ""
      end

      if response["objects"][0]["specs"]["os"]
        attributes["os"] = response["objects"][0]["specs"]["os"]
      else
        attributes["os"] = ""
      end

      Laptop.create(attributes)

      sleep(2)

    end
  end
end
