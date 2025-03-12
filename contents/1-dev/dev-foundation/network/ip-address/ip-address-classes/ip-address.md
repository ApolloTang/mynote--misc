### 

# Understanding Class A IPv4 address

IPv4 address has 32 bits, starting from 0th to 31th (31- 0 +1= 32 bits).  To identify class A IPv4 address, you can look at the bit-0 (the highest order bit). If this bit is not set (value is 0), you know it is an Class A IPv4 address.  With the bit-0 taken for to identify the Class type, there is 31 bits left for addess representation: 

```
bit number: [0][1][2]............[31]
             ^  ^                 ^
                |<--- 31 bits --->|
                   to represent
                      address
```

This remainig 31 bits is divided into two parts: bit-1 to bit-7 is used to identify the network on which the host resides. Bit-8 to bit-31 is used to identify the particular host on the given network. 

```
bit number: [0][1].............[7][8]................[31]
             ^  ^               ^  ^                  ^
                |<-- network--> |  |<----- host ----> |
```

So, the number of bits available for network address is 7 bits (7 - 1 + 1) , and the number of bits available for host address are 24 bits (31 - 9 + 1) .  These means there are  2<sup>7</sup> = 128 potential addresses can be used to label networks, and each of this network can connect to a potential of 2<sup>24</sup> = 16,777,216  hosts.  

Combining the network part and host part there are potential  2<sup>7+24</sup> = 2<sup>31</sup> = 2,147,483,648 devices connected to Class A IPv4 address. This is 50 percent of the total IPv4 unicast address space ( 2<sup>31</sup> /2<sup>32</sup> x 100% = 50% ).  

**Lets summarize what we had learn about the Class A IPv4:** 

|                   |                                             |
| ----------------- | ------------------------------------------- |
| High order bits   | 0                                           |
| Number of Nets    | 2<sup>7</sup> = 128                         |
| Number of Hosts   | 2<sup>24</sup> = 16,777,216                 |
| Fraction of Total | 2<sup>31</sup> /2<sup>32</sup> x 100% = 50% |

**Address Ranges:**   

| Notation type           | From                                            | To                                              |
| ----------------------- | ----------------------------------------------- | ----------------------------------------------- |
| dotted decimal notation | `0.0.0.0`                                       | `127.255.255.255`                               |
| binary notation         | `0000 0000 . 0000 0000 . 0000 0000 . 0000 0000` | `0111 1111 . 1111 1111 . 1111 1111 . 1111 1111` |
| Hex notation            | `00.00.00.00`                                   | `00.FF.FF.FF`                                   |



```
0000,0000,-,-,-,-,-,-(bin) = 0(dec) default route
0000,0001,-,-,-,-,-,-(bin) = 1(dec) first network address in class A
0111,1110,-,-,-,-,-,-(bin) = 126(dec) last network address in class A 
0111,1111,-,-,-,-,-,-(bin) = 127(dec) loopback
```

In class A ipv4 address, the 0th to 7th bits is used for the network part.  

There are a total of  2<sup>7 </sup>=128 possible network address can be represented by this first 8bits, but addresses that start with`0000,0000,--(bin)` and `0111,1111,--(bin)`  is reserved.  Thus, we are left with (2^7)-2=126 usuable network address.  The 126 useable address that can represent network range from `0000,0000,--(bin)`  to `0111,1110,--(bin)` . 


|                            | dotted decimal | binary | hex | cardinality |
| -------------------------- | ------------------------------------------------------------ | ------------------------ | ------------------------ | -------------------------- |
| default | `0.0.0.0 - 0,255,255,255` | `0000,0000.0000,0000.0000,0000.0000,0000 - 0000,0000.1111,1111.1111,1111.1111,1111` | `00.00.00.00 - 00.FF.FF.FF` | 16777216=2<sup>24</sup> |
| usable | `1.0.0.0 - 126,255,255,255` | `0000,0001.0000,0000.0000,0000.0000,0000 - 0111,1110.1111,1111.1111,1111.1111,1111 ` | `01.00.00.00 - 7E.FF.FF.FF` | 2113929216 |
| loopback | `127.0.0.0 - 127.255.255.255` | `0111,1111.0000,0000.0000,0000.0000,0000 - 0111,1111.1111,1111.1111,1111.1111,1111 ` | `7F.00.00.00 - 7F.FF.FF.FF` | 16777216=2<sup>24</sup> |
|  |  |  |  | 2147483648=2<sup>31</sup> |

2113929216 + 2<sup>24 </sup>+ 2<sup>24</sup> = 2147483648 = 2<sup>31</sup>

( 2<sup>7 </sup> - 2 )* 2<sup>24</sup> = 128-2  * 16777216 = 126 * 16777216 = 2113929216



```0000,0000,--(bin)
0,0,0,0 --> 0,255,255,255
1,0,0,0 --> 126,255,255,255
127,0,0,0 --> 255,255,255,255 
```



 

The first unusual address  `0000,0000,--(bin)` is unusable; this address is called the **default route**. 

- We assign the last address of network part, `0111,1111,--(bin)`,  to loopback, we are remained with usable address from 0000,0001(bin) to 0111,1110(bin) for network, there are a total of (2^24-2)=16777214  we substract 2 from (2^24) because we cannot count address 0000,0000(bin) and address 0111,1111(bin).




host part of class A
====================

-,-,0000,0000,0000,0000,0000,0000 = -,-,0,0,0,0,0,0 this address 
-,-,0000,0000,0000,0000,0000,0001 = -,-,0,0,0,0,0,1 first host address of a given network
-,-,1111,1111,1111,1111,1111,1110 = -,-,255,255,255,255,255,254 last host address of a given network
-,-,1111,1111,1111,1111,1111,1111 = -,-,255,255,255,255,255,255 broadcast address

we are lefted with usable address from -,-,0,0,0,0,0,1(dec) to -,-,255,255,255,255,255,255(dec) for host, there are a total of (2^7-2)=16,777,214.
we minus 2 because we cannot count address -,-,0,0,0,0,0,0(dec) and address -,-,255,255,255,255,255,255(dec), because they are assigned for "this address" and "broadcast address" respectively. 

